import Bullets from "@/components/interactives/bullets";
import ProfileButton from "@/components/interactives/profile-button";
import { Button } from "@/components/ui/button";
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
      <Bullets />
    </div>
  );
};

export default HomePage;
