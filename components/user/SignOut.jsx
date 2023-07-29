"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { Button } from "../Button";

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
