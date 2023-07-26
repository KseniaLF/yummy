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

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/breakfast" },
  { label: "Categories", href: "/categories/breakfast" },
];

export const Burger = () => {
  const pathname = usePathname();

  return (
    <Menubar className="block lg:hidden" type="button">
      <MenubarMenu>
        <MenubarTrigger>Menu</MenubarTrigger>

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
