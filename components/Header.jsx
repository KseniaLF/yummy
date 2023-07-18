import Link from "next/link";

export const Header = () => {
  return (
    <header>
      Header
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </header>
  );
};
