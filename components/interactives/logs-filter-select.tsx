"use client";

import { logsTabs } from "@/lib/logs";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import duration from "dayjs/plugin/duration";
import dayjs from "dayjs";

dayjs.extend(duration);

const LogsFilterSelect = () => {
  return (
    <>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="year" className="text-right">
            Year
          </Label>
          <Select defaultValue="2023">
            <SelectTrigger className="col-span-3" id="year">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* TODO Add starting year as users creation date */}
                {[...Array(5)].map((_, idx) => (
                  <SelectItem key={idx} value={`202${3 + idx}`}>
                    {`20${23 + idx}`}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="colors" className="text-right">
            Overall Colors
          </Label>
          <Select defaultValue="month">
            <SelectTrigger className="col-span-3" id="colors">
              <SelectValue placeholder="Select color" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="month">Month</SelectItem>

                {logsTabs.map((tab) => (
                  <SelectItem key={tab} value={tab}>
                    {tab}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="grid" className="text-right">
            Grid Type
          </Label>
          <Select defaultValue="horizontal">
            <SelectTrigger className="col-span-3" id="grid">
              <SelectValue placeholder="Select grid type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="horizontal">Horizontal</SelectItem>
                <SelectItem value="vertical">Vertical</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default LogsFilterSelect;
