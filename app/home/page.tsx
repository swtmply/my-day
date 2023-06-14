import LogsList from "@/components/interactives/logs-list";
import { prisma } from "@/lib/db";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import dayjs from "dayjs";
import { currentYear } from "@/lib/dates";

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
    include: {
      preference: true,
    },
  });

  const year = user?.preference?.year || currentYear;

  const date = new Date(Number(year), 0, 1);

  const logs = await prisma.log.findMany({
    where: {
      userId: session?.user?.id,
      date: {
        lte: dayjs(date).endOf("year").toDate(),
        gte: dayjs(date).startOf("year").toDate(),
      },
    },
  });

  return <LogsList logs={logs} preference={user?.preference!} />;
};

export default HomePage;
