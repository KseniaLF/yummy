import Image from "next/image";
import Link from "next/link";

import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="">
      <div className="p-4 container flex flex-col items-center gap-8">
        <p>
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={44} height={44} />
            <span className="text-lg text-main ml-2">So</span>Yummy
          </Link>
        </p>

        <ul className="flex flex-col items-center">
          <li>Ingredients</li>
          <li>Add Recipes</li>
        </ul>

        <ul className="flex justify-center gap-3">
          <li>
            <BsFacebook className="text-2xl md:text-3xl" />
          </li>
          <li>
            <BsYoutube className="text-2xl md:text-3xl" />
          </li>
          <li>
            <BsTwitter className="text-2xl md:text-3xl" />
          </li>
          <li>
            <BsInstagram className="text-2xl md:text-3xl hover:text-main" />
          </li>
        </ul>
      </div>
    </footer>
  );
};
