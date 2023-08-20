"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  // { label: "About", href: "/about/breakfast" },
  { label: "Categories", href: "/categories/breakfast" },
  { label: "Add Recipe", href: "/add" },
  { label: "My Recipes", href: "/my" },
  { label: "Search", href: "/search?search=&page=1" },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-7">
      {navItems.map((item) => {
        const isActive = item.href.includes(pathname);
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
