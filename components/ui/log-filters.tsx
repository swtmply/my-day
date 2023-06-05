import React from "react";
import LogsFilterDialog from "../interactives/logs-filter-dialog";

const LogFilters = () => {
  return (
    <div className="flex gap-2 items-center">
      <p className="muted text-xs shrink-0">View as:</p>

      <div className="font-shoble flex gap-4 flex-grow justify-center">
        <p>Year 2023,</p>
        <p>Day Colors,</p>
        <p>Horizontal Grid</p>
      </div>

      <LogsFilterDialog />
    </div>
  );
};

export default LogFilters;
