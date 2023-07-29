"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/breakfast" },
  { label: "Categories", href: "/categories/breakfast" },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-7">
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
    </nav>
  );
};
