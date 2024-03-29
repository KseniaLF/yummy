"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/UI/menubar";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HiMenu } from "react-icons/hi";

const navItems = [
  { label: "Home", href: "/" },
  // { label: "About", href: "/about/breakfast" },
  { label: "Categories", href: "/categories/breakfast" },
  { label: "Add Recipe", href: "/add" },
  { label: "My Recipes", href: "/my" },
  { label: "Search", href: "/search?search=&page=1" },
];

export const Burger = () => {
  const pathname = usePathname();

  return (
    <Menubar className="block lg:hidden" type="button">
      <MenubarMenu>
        <MenubarTrigger>
          <HiMenu size={30} />
        </MenubarTrigger>

        <MenubarContent>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <MenubarItem key={item.label}>
                <Link className={isActive ? "text-main" : ""} href={item.href}>
                  {item.label}
                </Link>
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
