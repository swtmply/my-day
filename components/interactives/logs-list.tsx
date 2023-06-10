"use client";

import { currentYear, monthsWithDates } from "@/lib/dates";
import React, { useCallback, useEffect } from "react";
import { CheckboxGrid } from "./checkbox-grid";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { logTabs } from "@/lib/logs";
import { Log } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useReadLocalStorage } from "usehooks-ts";
import { PreferenceType } from "../forms/logs-filter-form";

const LogsList = ({
  month,
  days,
  logs,
}: {
  month?: string;
  days?: number;
  logs?: Log[];
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const preference = useReadLocalStorage<PreferenceType>("preference");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const year = preference?.year || currentYear;

  const { data } = useQuery<Log[]>({
    queryKey: month ? ["logs", month, year] : ["year-logs"],
    queryFn: async () => {
      const data = await fetch(`/api/logs/${month}?year=${year}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      if (data) return data.logs;
    },
    initialData: logs,
  });

  return (
    <div className="flex flex-col gap-6">
      {/* VERTICAL justify-between flex-row */}
      {month
        ? logTabs.map((tab) => (
            <div
              key={tab}
              className="flex flex-col gap-2" // VERTICAL flex-col items-center w-[65px]
            >
              <p className="font-shoble  truncate text-xl">{tab}</p>

              <CheckboxGrid logs={data} tab={tab} count={days!} />
            </div>
          ))
        : monthsWithDates.map((month, index) => (
            <Link
              href={`${pathname}/${month.name}?${createQueryString(
                "days",
                month.days.toString()
              )}`}
              key={index}
              className="flex flex-col gap-2"
            >
              <p className="font-shoble text-xl">{month.name}</p>

              <CheckboxGrid tab={"Month"} count={month.days} />
            </Link>
          ))}
    </div>
  );
};

export default LogsList;
