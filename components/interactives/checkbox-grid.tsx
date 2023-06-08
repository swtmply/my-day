import { logColors, logTabs } from "@/lib/logs";
import { months } from "@/lib/dates";
import { CheckboxMarkSVG, CheckboxSVG } from "../ui/grid-checkbox-svg";
import { cn } from "@/lib/utils";
import { Log } from "@prisma/client";
import dayjs from "dayjs";

const Checkbox = ({ color }: { color?: string }) => {
  return (
    <div className="relative">
      <CheckboxSVG />
      <CheckboxMarkSVG
        className={cn("absolute top-0 left-1", `stroke-${color}`)}
      />
    </div>
  );
};

export const CheckboxGrid = ({
  count,
  tab,
  logs,
}: {
  count: number;
  tab: (typeof logTabs)[number] | "Month";
  logs?: Log[];
}) => {
  const isMonth = months.find((m) => m === tab);

  return (
    <div className="flex flex-wrap gap-2">
      {[...Array(count)].map((_, idx) => {
        const log = logs?.find((log) => {
          return dayjs(log.date).date() === idx + 1 && log.type === tab;
        });

        if (log) {
          const color = logColors[tab][log.point];
          return <Checkbox key={tab + idx} color={color} />;
        }

        return (
          <Checkbox
            key={tab + idx}
            color={logColors[isMonth ? "Month" : tab][-1]}
          />
        );
      })}
    </div>
  );
};

export default Checkbox;
