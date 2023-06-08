import { SlidersHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import LogsFilterForm from "../forms/logs-filter-form";

const LogsFilterDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <SlidersHorizontal className="aspect-square h-4" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Logs Filter</DialogTitle>
        </DialogHeader>
        <LogsFilterForm />
      </DialogContent>
    </Dialog>
  );
};

export default LogsFilterDialog;
