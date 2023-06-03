"use client";

import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <Button onClick={() => signOut({ callbackUrl: "/" })} variant={"outline"}>
      Logout
    </Button>
  );
};

export default SignOutButton;
