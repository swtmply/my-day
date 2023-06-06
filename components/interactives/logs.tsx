"use client";

import { monthsWithDates } from "@/lib/dates";
import React, { useCallback } from "react";
import { CheckboxGrid } from "./checkbox";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { logsTabs } from "@/lib/logs";
import { Log } from "@prisma/client";

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

  return (
    <>
      {month
        ? logsTabs.map((tab) => (
            <div key={tab} className="flex flex-col gap-2">
              <p className="font-shoble text-xl">{tab}</p>

              <CheckboxGrid logs={logs} tab={tab} count={days!} />
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

              <CheckboxGrid tab={month.name} count={month.days} />
            </Link>
          ))}
    </>
  );
};

export default Logs;
