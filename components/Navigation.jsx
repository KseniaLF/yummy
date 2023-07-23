"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

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
    <nav className="flex gap-7">
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

      {session?.data && <Link href={"/profile"}>Profile</Link>}

      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
          Sign Out
        </Link>
      ) : (
        <Link href={"/api/auth/signin"}>Sign In</Link>
      )}
    </nav>
  );
};
