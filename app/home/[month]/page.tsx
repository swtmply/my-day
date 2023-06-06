import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Logs from "@/components/interactives/logs";
import { currentYear, months } from "@/lib/dates";
import { prisma } from "@/lib/db";
import dayjs from "dayjs";
import { getServerSession } from "next-auth";

const MonthPage = async ({
  params,
  searchParams,
}: {
  params: { month: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const session = await getServerSession(authOptions);

  const month = `${currentYear}-${months.indexOf(params.month) + 1}-01`;
  const start = dayjs(month).startOf("month").format("YYYY-MM-DD");
  const end = dayjs(month).endOf("month").format("YYYY-MM-DD");

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
    <div className="flex flex-col gap-6">
      <Logs
        logs={monthLogs}
        month={params.month}
        days={Number(searchParams.days)}
      />
    </div>
  );
};

export default MonthPage;
