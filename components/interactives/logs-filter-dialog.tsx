import { SlidersHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import LogsFilterSelect from "./logs-filter-select";

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
        <LogsFilterSelect />
      </DialogContent>
    </Dialog>
  );
};

export default LogsFilterDialog;
