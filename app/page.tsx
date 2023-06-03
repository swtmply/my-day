import SignInButton from "@/components/interactives/sign-in-button";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen py-12">
      <div className="flex flex-col gap-12 w-5/6 flex-grow justify-center">
        <div className="flex flex-col items-center">
          <h1 className="font-shoble">How my day went</h1>
          <p>
            A bullet journal for <strong>YOU</strong>
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="h-px flex-grow border-t-2 border-slate-900 " />
          <p className="font-shoble">Sign In</p>
          <div className="h-px flex-grow border-t-2 border-slate-900 " />
        </div>
        <SignInButton />
      </div>
      <p>Copyright. All rights reserved 2023</p>
    </div>
  );
}
