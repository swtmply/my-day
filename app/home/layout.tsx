import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ProfileButton from "@/components/interactives/profile-button";
import LogFilters from "@/components/ui/log-filters";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/");

  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <ProfileButton session={session} />
        <LogFilters />

        {children}
      </div>
      ;
    </div>
  );
};

export default HomeLayout;
