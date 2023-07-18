import Link from "next/link";
import logo from "../images/logo.png";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="container flex gap-2 justify-between mt-4">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={44} height={44} />
      </Link>

      <nav className="flex gap-7">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>

      <span className="">User</span>
    </header>
  );
};
