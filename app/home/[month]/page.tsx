import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogsList from "@/components/interactives/logs-list";
import { currentYear, months } from "@/lib/dates";
import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";

const MonthPage = async ({
  params,
  searchParams,
}: {
  params: { month: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const session = await getServerSession(authOptions);

  const start = new Date(currentYear, months.indexOf(params.month), 1);
  const end = new Date(currentYear, months.indexOf(params.month) + 1, 0);

  const monthLogs = await prisma.log.findMany({
    where: {
      date: {
        lte: new Date(end),
        gte: new Date(start),
      },
      userId: session?.user?.id,
    },
  });

  return (
    <LogsList
      logs={monthLogs}
      month={params.month}
      days={Number(searchParams.days)}
    />
  );
};

export default MonthPage;
