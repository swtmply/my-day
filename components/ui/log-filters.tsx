"use client";

import { useSearchParams } from "next/navigation";
import LogsFilterDialog from "../interactives/logs-filter-dialog";
import { currentYear } from "@/lib/dates";
import { useLocalStorage } from "usehooks-ts";

const LogFilters = () => {
  const searchParams = useSearchParams();
  // TODO add user default preference
  useLocalStorage("preference", {});

  return (
    <div className="flex gap-2 items-center">
      <p className="muted text-xs shrink-0">View as:</p>

      <div className="font-shoble flex gap-4 flex-grow justify-center">
        <p>Year {searchParams.get("year") || currentYear},</p>
        <p>{searchParams.get("color") || "Month"} Colors,</p>
        <p>{searchParams.get("grid") || "Horizontal"} Grid</p>
      </div>

      <LogsFilterDialog />
    </div>
  );
};

export default LogFilters;
