import Checkbox from "@/components/interactives/checkbox";
import ProfileButton from "@/components/interactives/profile-button";
import { Button } from "@/components/ui/button";
import { monthsWithDates } from "@/lib/dates";
import { SlidersHorizontal } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-6">
      <ProfileButton />
      <div className="flex gap-2 items-center">
        <p className="muted text-xs shrink-0">View as:</p>

        <div className="font-shoble flex gap-4 flex-grow justify-center">
          <p>Year 2023,</p>
          <p>Day Colors,</p>
          <p>Horizontal Grid</p>
        </div>

        <Button className="flex-shrink" variant={"ghost"}>
          <SlidersHorizontal className="aspect-square h-4" />
        </Button>
      </div>
      {monthsWithDates.map((month, index) => (
        <div key={index} className="flex flex-col gap-2">
          <p className="font-shoble text-xl">{month.name}</p>

          <div className="flex flex-wrap gap-2">
            {[...Array(month.days)].map((_, idx) => (
              <Checkbox key={idx} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
