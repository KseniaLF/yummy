import Link from "next/link";
import Image from "next/image";
import { Navigation } from "./Navigation";
import { UserInfo } from "./user/UserInfo";

export const Header = () => {
  return (
    <header className="container flex gap-2 justify-between mt-4">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={44} height={44} />
      </Link>

      <Navigation />

      <span className="">User</span>

      <UserInfo />
    </header>
  );
};
