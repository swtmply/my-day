"use client";

import { Plus } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import CreateLogForm from "../forms/create-log-form";

const AddLogDialog = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="flex gap-2 font-shoble border rounded border-slate-900 px-3 py-2 items-center">
        <Plus />
        <span className="text-lg">Add Log</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Log</DialogTitle>
        </DialogHeader>
        <CreateLogForm setOpen={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default AddLogDialog;
