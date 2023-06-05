import Logs from "@/components/interactives/logs";
import ProfileButton from "@/components/interactives/profile-button";
import LogFilters from "@/components/ui/log-filters";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-6">
      <ProfileButton />
      <LogFilters />
      <Logs />
    </div>
  );
};

export default HomePage;
