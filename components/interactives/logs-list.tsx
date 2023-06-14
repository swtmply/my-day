"use client";

import { currentYear, months, monthsWithDates } from "@/lib/dates";
import React, { useCallback } from "react";
import { CheckboxGrid } from "./checkbox-grid";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { logTabs } from "@/lib/logs";
import { Log, Preference } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useLocalStorage } from "usehooks-ts";
import { PreferenceType } from "../forms/logs-filter-form";
import dayjs from "dayjs";

const LogsList = ({
  month,
  days,
  logs,
  preference,
}: {
  month?: string;
  days?: number;
  logs?: Log[];
  preference?: Preference | PreferenceType;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [storagePreference] = useLocalStorage<PreferenceType>(
    "preference",
    preference || {
      year: currentYear.toString(),
      color: "Day",
      grid: "horizontal",
    }
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const year = storagePreference.year || currentYear;

  const { data } = useQuery<Log[]>({
    queryKey: month ? ["logs", month, year] : ["year-logs", year],
    queryFn: async () => {
      if (month) {
        const data = await fetch(`/api/logs/${year}/${month}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => res.json());

        if (data) return data;
      } else {
        const data = await fetch(`api/logs/${year}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => res.json());

        if (data) return data;
      }
    },
    initialData: logs,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
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
        : monthsWithDates.map((month, index) => {
            const monthData = data?.filter((log) => {
              return months[dayjs(log.date).month()] === month.name;
            });

            return (
              <Link
                href={`${pathname}/${month.name}?${createQueryString(
                  "days",
                  month.days.toString()
                )}`}
                key={index}
                className="flex flex-col gap-2"
              >
                <p className="font-shoble text-xl">{month.name}</p>

                <CheckboxGrid
                  tab={storagePreference.color as (typeof logTabs)[number]}
                  logs={monthData}
                  count={month.days}
                />
              </Link>
            );
          })}
    </div>
  );
};

export default LogsList;
