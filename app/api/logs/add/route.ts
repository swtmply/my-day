import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { LogType } from "@/components/forms/create-log-form";

export const POST = async (request: Request) => {
  const session = await getServerSession(authOptions);

  if (!session) return new Response("Unathorized request", { status: 401 });

  const body: LogType = await request.json();

  await prisma.log.create({
    data: {
      date: new Date(body.date),
      point: Number(body.point),
      type: body.type,
      userId: session.user?.id!,
    },
  });

  return new Response("Created log successfully", {
    status: 200,
  });
};
