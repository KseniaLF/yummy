"use client";

import { useState } from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export const SearchButton = ({ search }) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(search ? search : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?page=1&search=${searchValue}`);
  };

  return (
    <div className="relative inline-block">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={searchValue}
          type="Enter the text"
          placeholder="Beef"
          onChange={(e) => setSearchValue(e.target.value)}
          className="py-4 md:py-5 lg:py-6 pl-7 lg:pl-10 pr-[135px] md:pr-[150px] lg:pr-[185px] w-[300px] md:w-[360px] lg:w-[500px] border-2 border-main hover:border-main outline-0 custom-rounded "
        ></input>

        <Button
          type="submit"
          className="absolute top-0 right-0 border-2 border-second"
        >
          Search
        </Button>
      </form>
    </div>
  );
};
