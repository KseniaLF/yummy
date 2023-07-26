"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

export const SignOut = ({ className }) => {
  return (
    <Link
      href="#"
      onClick={() => signOut({ callbackUrl: "/" })}
      className={className}
    >
      Sign Out
    </Link>
  );
};
