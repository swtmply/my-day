"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import DatePicker from "../ui/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { logColors, logDescriptions, logTabs } from "@/lib/logs";
import { CheckboxMarkSVG } from "../ui/grid-checkbox-svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { months } from "@/lib/dates";

const logSchema = z.object({
  date: z.date(),
  type: z.string(),
  point: z.string(),
  userId: z.string(),
});

export type LogType = z.infer<typeof logSchema>;

const CreateLogForm = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const form = useForm<LogType>({
    resolver: zodResolver(logSchema),
    defaultValues: {
      date: new Date(),
      point: "0",
      type: "Day",
      userId: session?.user?.id || "",
    },
  });

  const type = form.watch("type") as (typeof logTabs)[number];
  const date = form.watch("date");
  const month = months[dayjs(date).month()];

  const { mutate } = useMutation(
    async (value: LogType) => {
      return await fetch("/api/logs/add", {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(["logs", month]);
        queryClient.invalidateQueries(["year-logs", dayjs(date).year()]);

        setOpen(false);
      },
    }
  );

  function onSubmit(values: LogType) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select log type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {logTabs.map((tab) => (
                    <SelectItem key={tab} value={tab}>
                      {tab}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <DatePicker field={field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="point"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Point</FormLabel>

              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select point for this log" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {logDescriptions[type].map((desc, idx) => (
                    <SelectItem key={desc + idx} value={idx.toString()}>
                      <div className="flex items-center">
                        <CheckboxMarkSVG
                          className={`stroke-${logColors[type][idx]}`}
                        />
                        {desc}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CreateLogForm;
