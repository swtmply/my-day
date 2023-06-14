import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import dayjs from "dayjs";

export const GET = async (
  request: Request,
  { params }: { params: { year: string } }
) => {
  const session = await getServerSession(authOptions);

  if (!session) return new Response("Unathorized request", { status: 401 });

  const year = params.year;

  const date = new Date(Number(year), 0, 1);

  const logs = await prisma.log.findMany({
    where: {
      userId: session.user?.id,
      date: {
        lte: dayjs(date).endOf("year").toDate(),
        gte: dayjs(date).startOf("year").toDate(),
      },
    },
  });

  return NextResponse.json(logs);
};
