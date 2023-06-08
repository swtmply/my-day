"use client";

import { monthsWithDates } from "@/lib/dates";
import React, { useCallback } from "react";
import { CheckboxGrid } from "./checkbox-grid";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { logTabs } from "@/lib/logs";
import { Log } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

const Logs = ({
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

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const { data } = useQuery<Log[]>({
    queryKey: month ? ["logs", month] : ["year-logs"],
    queryFn: async () => {
      const data = await fetch(`/api/logs/${month}`, {
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
    <>
      {month
        ? logTabs.map((tab) => (
            <div key={tab} className="flex flex-col gap-2">
              <p className="font-shoble text-xl">{tab}</p>

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
    </>
  );
};

export default Logs;
