"use client";

import { monthsWithDates } from "@/lib/dates";
import React, { useCallback, useMemo } from "react";
import { CheckboxGrid } from "./checkbox";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { bulletTabs } from "@/lib/bullet";

const Bullets = () => {
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

  const month = useMemo(() => searchParams.get("month"), [searchParams]);
  const daysInMonth = useMemo(
    () => Number(searchParams.get("days")),
    [searchParams]
  );

  return (
    <>
      {month
        ? bulletTabs.map((tab) => (
            <div key={tab} className="flex flex-col gap-2">
              <p className="font-shoble text-xl">{tab}</p>

              <CheckboxGrid tab={tab} count={daysInMonth} />
            </div>
          ))
        : monthsWithDates.map((month, index) => (
            <Link
              href={`${pathname}?${createQueryString(
                "month",
                month.name
              )}&${createQueryString("days", month.days.toString())}`}
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

export default Bullets;
