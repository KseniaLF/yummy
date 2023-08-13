"use client";

import { useState } from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export const SearchButton = () => {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="relative inline-block mt-[330px] md:mt-8 lg:mt-12">
      <input
        type="Enter the text"
        placeholder="Beef"
        onChange={(e) => setSearchValue(e.target.value)}
        className="py-4 md:py-5 lg:py-6 pl-7 lg:pl-10 pr-[135px] md:pr-[150px] lg:pr-[185px] w-[300px] md:w-[360px] lg:w-[500px] border-2 border-main hover:border-main outline-0 custom-rounded "
      ></input>

      <Button
        className="absolute top-0 right-0 border-2 border-second"
        onClick={() => router.push(`/search?search=${searchValue}`)}
      >
        Search
      </Button>
    </div>
  );
};
