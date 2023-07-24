import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

export async function UserInfo() {
  const session = await getServerSession(authConfig);

  console.log(session);
  return (
    <div className="flex gap-3 items-center">
      {session?.user?.image && (
        <img
          className="rounded-full"
          width={50}
          height={50}
          src={session.user.image}
          alt=""
        />
      )}

      {session?.user?.name}
    </div>
  );
}
