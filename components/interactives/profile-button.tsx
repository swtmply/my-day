import { Session } from "next-auth";
import Image from "next/image";

const ProfileButton = ({ session }: { session: Session }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="aspect-square h-14 rounded-full relative">
        <Image
          src={session?.user?.image || ""}
          alt="user profile"
          fill
          className="rounded-full"
        />
      </div>
      <h2 className="font-shoble">{session?.user?.name}</h2>
    </div>
  );
};

export default ProfileButton;
