import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { months } from "@/lib/dates";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { month: string; year: string } }
) => {
  const session = await getServerSession(authOptions);

  if (!session) return new Response("Unathorized request", { status: 401 });

  const year = Number(params.year);

  const start = new Date(year, months.indexOf(params.month), 1);
  const end = new Date(year, months.indexOf(params.month) + 1, 0);

  const logs = await prisma.log.findMany({
    where: {
      userId: session.user?.id,
      date: {
        lte: new Date(end),
        gte: new Date(start),
      },
    },
  });

  return NextResponse.json(logs);
};
