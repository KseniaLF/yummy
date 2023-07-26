"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { SignOut } from "../user/SignOut";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/breakfast" },
  { label: "Categories", href: "/categories/breakfast" },
];

export const Navigation = () => {
  const pathname = usePathname();
  const session = useSession();

  console.log(session);

  return (
    <nav className="hidden lg:flex gap-7">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.label}
            className={isActive ? "text-main" : ""}
            href={item.href}
          >
            {item.label}
          </Link>
        );
      })}

      {session?.data && <Link href={"/categories/breakfast"}>Profile</Link>}

      {session?.data ? (
        <SignOut />
      ) : (
        <Link href={"/api/auth/signin"}>Sign In</Link>
      )}
    </nav>
  );
};
