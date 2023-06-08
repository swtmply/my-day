"use client";

import { logTabs } from "@/lib/logs";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { currentYear } from "@/lib/dates";
import { useLocalStorage } from "usehooks-ts";
import { useMutation } from "@tanstack/react-query";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";

const preferenceSchema = z.object({
  year: z.string().optional().default(currentYear.toString()),
  color: z.string().optional().default("month"),
  grid: z.string().optional().default("horizontal"),
});

export type PreferenceType = z.infer<typeof preferenceSchema>;

const LogsFilterSelect = () => {
  const [preference, setPreference] = useLocalStorage<PreferenceType>(
    "preference",
    {
      year: currentYear.toString(),
      grid: "horizontal",
      color: "Month",
    }
  );
  const searchParams = useSearchParams();

  const month = searchParams.get("days");

  const form = useForm<PreferenceType>({
    resolver: zodResolver(preferenceSchema),
    defaultValues: preference,
  });

  const { mutate } = useMutation(async (value: PreferenceType) => {
    return await fetch("/api/user/preference/update", {
      method: "PATCH",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
    });
  });

  const submitLog = form.handleSubmit((values) => {
    setPreference(values);

    mutate(values);
  });

  return (
    <>
      <form onSubmit={submitLog} className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="year" className="text-right">
            Year
          </Label>
          <Select
            defaultValue={preference.year}
            onValueChange={(value) => {
              setPreference((prev) => ({ ...prev, year: value }));
              form.setValue("year", value);
            }}
            name="year"
          >
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
        {!month && (
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="color" className="text-right">
              Overall Colors
            </Label>
            <Select
              defaultValue={preference.color}
              onValueChange={(value) => {
                setPreference((prev) => ({ ...prev, color: value }));
                form.setValue("color", value);
              }}
              name="color"
            >
              <SelectTrigger className="col-span-3" id="color">
                <SelectValue placeholder="Select color" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Month">Month</SelectItem>

                  {logTabs.map((tab) => (
                    <SelectItem key={tab} value={tab}>
                      {tab}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="grid" className="text-right">
            Grid Type
          </Label>
          <Select
            defaultValue={preference.grid}
            onValueChange={(value) => {
              setPreference((prev) => ({ ...prev, grid: value }));
              form.setValue("grid", value);
            }}
            name="grid"
          >
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
        <Button type="submit">Apply Changes</Button>
      </form>
    </>
  );
};

export default LogsFilterSelect;
