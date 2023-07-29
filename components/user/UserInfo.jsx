import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";

import { FiEdit2 } from "react-icons/fi";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/UI/menubar";
import { SignOut } from "./SignOut";
import Image from "next/image";
import Link from "next/link";

export async function UserInfo() {
  const session = await getServerSession(authConfig);
  console.log(session);

  return (
    <Menubar>
      <MenubarMenu>
        {!session?.user && <Link href={"/api/auth/signin"}>Sign In</Link>}

        <MenubarTrigger className="flex gap-3 items-center">
          {session?.user?.image && (
            <Image
              className="rounded-full"
              width={50}
              height={50}
              src={session.user.image}
              alt=""
            />
          )}
          {session?.user?.name}
        </MenubarTrigger>

        <MenubarContent>
          <MenubarItem>
            Edit profile
            <MenubarShortcut>
              <FiEdit2 size={18} />
            </MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <SignOut />
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
