import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

export async function UserInfo() {
  const session = await getServerSession(authConfig);

  console.log(session);
  return (
    <div>
      {session?.user?.name}
      {/* {console.log(session.user.image)} */}
      {session?.user?.image && (
        <img className="rounded-full" src={session.user.image} alt="" />
      )}
    </div>
  );
}
