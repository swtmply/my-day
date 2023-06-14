import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ProfileButton from "@/components/interactives/profile-button";
import LogFilters from "@/components/ui/log-filters";
import { prisma } from "@/lib/db";
import { currentYear } from "@/lib/dates";
import AddLogDialog from "@/components/interactives/add-log-dialog";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/");

  const user = await prisma.user.findUnique({
    where: { id: session.user?.id },
    include: {
      preference: true,
    },
  });

  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <div className="w-full flex justify-between items-center">
          <ProfileButton session={session} />
          <AddLogDialog />
        </div>
        <LogFilters
          preference={
            user?.preference || {
              year: currentYear.toString(),
              color: "Day",
              grid: "horizontal",
            }
          }
        />

        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
