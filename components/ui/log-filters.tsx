"use client";

import LogsFilterDialog from "../interactives/logs-filter-dialog";
import { useLocalStorage } from "usehooks-ts";
import { Preference } from "@prisma/client";
import { PreferenceType } from "../interactives/logs-filter-select";

const LogFilters = ({
  preference,
}: {
  preference: Preference | PreferenceType;
}) => {
  const [storagePreference] = useLocalStorage<PreferenceType>(
    "preference",
    preference
  );

  return (
    <div className="flex gap-2 items-center">
      <p className="muted text-xs shrink-0">View as:</p>

      <div className="font-shoble flex gap-4 flex-grow justify-center">
        <p>Year {storagePreference.year},</p>
        <p>{storagePreference.color} Colors,</p>
        <p>{storagePreference.grid} Grid</p>
      </div>

      <LogsFilterDialog />
    </div>
  );
};

export default LogFilters;
