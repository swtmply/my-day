import localeData from "dayjs/plugin/localeData";
import dayjs from "dayjs";

dayjs.extend(localeData);

export const currentYear = dayjs().year();
export const months: Array<string> = dayjs.months();
export const daysInMonth = months.map((_, idx) =>
  dayjs(`${dayjs().year()}-${idx + 1}`).daysInMonth()
);

export const monthsWithDates = months.map((month, idx) => ({
  name: month,
  days: daysInMonth[idx],
}));
