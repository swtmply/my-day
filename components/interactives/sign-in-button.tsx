"use client";

import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <Button onClick={() => signIn("discord")} variant={"outline"}>
      Continue with Discord
    </Button>
  );
};

export default SignInButton;
