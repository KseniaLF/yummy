"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  // { label: "Home", href: "/"},
  // { label: "About", href: "/about/breakfast" },
  { label: "Categories", href: "/categories/breakfast", base: "/categories" },
  { label: "Add Recipe", href: "/add", base: "/add" },
  { label: "My Recipes", href: "/my", base: "/my" },
  { label: "Search", href: "/search?search=&page=1", base: "/search" },
];

export const Navigation = () => {
  const pathname = usePathname();
  const isHomeActive = pathname === "/";

  return (
    <nav className="hidden lg:flex items-center gap-7">
      <Link key="Home" className={isHomeActive ? "text-main" : ""} href="/">
        Home
      </Link>

      {navItems.map((item) => {
        console.log(item.href);
        console.log(pathname);
        const isActive = pathname.includes(item.base) && !isHomeActive;
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
