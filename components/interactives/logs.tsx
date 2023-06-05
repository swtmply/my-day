"use client";

import { monthsWithDates } from "@/lib/dates";
import React, { useCallback, useMemo } from "react";
import { CheckboxGrid } from "./checkbox";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { logsTabs } from "@/lib/logs";

const Logs = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (queryParams: Array<{ name: string; value: string }>) => {
      const params = new URLSearchParams(searchParams.toString());

      queryParams.forEach((queryParam) => {
        params.set(queryParam.name, queryParam.value);
      });

      return params.toString();
    },
    [searchParams]
  );

  const month = useMemo(() => searchParams.get("month"), [searchParams]);
  const daysInMonth = useMemo(
    () => Number(searchParams.get("days")),
    [searchParams]
  );

  return (
    <>
      {month
        ? logsTabs.map((tab) => (
            <div key={tab} className="flex flex-col gap-2">
              <p className="font-shoble text-xl">{tab}</p>

              <CheckboxGrid tab={tab} count={daysInMonth} />
            </div>
          ))
        : monthsWithDates.map((month, index) => (
            <Link
              href={`${pathname}?${createQueryString([
                { name: "month", value: month.name },
                { name: "days", value: month.days.toString() },
              ])}`}
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
