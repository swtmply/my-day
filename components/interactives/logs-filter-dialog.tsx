"use client";

import { SlidersHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import LogsFilterForm from "../forms/logs-filter-form";
import { useState } from "react";

const LogsFilterDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <SlidersHorizontal className="aspect-square h-4" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Logs Filter</DialogTitle>
        </DialogHeader>
        <LogsFilterForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default LogsFilterDialog;
