import "./globals.css";

import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import AuthContext from "@/components/context/auth-context";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const shoble = localFont({
  src: [
    {
      path: "fonts/shoble/Shnobel-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/shoble/Shnobel-Oblique.woff",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-shoble",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className={`${dmSans.className} ${shoble.variable}`}>
      <body className="bg-amber-50 text-slate-900">
        <AuthContext session={session}>{children}</AuthContext>
      </body>
    </html>
  );
}
