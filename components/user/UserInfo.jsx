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

export async function UserInfo() {
  const session = await getServerSession(authConfig);

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="flex gap-3 items-center">
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
            <SignOut className="w-full p-2 text-center rounded-md hover-bg" />
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
