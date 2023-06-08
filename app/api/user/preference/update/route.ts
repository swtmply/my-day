import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PreferenceType } from "@/components/forms/logs-filter-form";

export const PATCH = async (request: Request) => {
  const session = await getServerSession(authOptions);

  if (!session) return new Response("Unathorized request", { status: 401 });

  const body: PreferenceType = await request.json();

  await prisma.user.update({
    where: {
      id: session.user?.id!,
    },
    data: {
      preference: {
        upsert: {
          create: body,
          update: body,
        },
      },
    },
  });

  return new Response("Updated preference successfully", {
    status: 200,
  });
};
