"use client";

import { SearchButton } from "@/components/SearchButton";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { CategoriesList } from "@/components/categories/CategoriesList";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const page = searchParams.get("page");
  const router = useRouter();

  const [recipes, setRecipes] = useState([]);

  const [isLoading, seIsLoading] = useState(true);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/recipes/search?page=${page}&search=${search}`
        );
        setRecipes(data);
      } catch (err) {
        console.log(err);
      }

      seIsLoading(false);
    };
    fetchData();
  }, [page, search]);

  return (
    <div className="container">
      <SectionTitle>Search</SectionTitle>

      <div className="text-center">
        <SearchButton search={search} />
      </div>

      {isLoading && <>Loader</>}

      {!isLoading && recipes?.length !== 0 && (
        <CategoriesList recipeArr={recipes} />
      )}

      {!isLoading && recipes?.length === 0 && (
        <p className="text-center">There are no recipes here yet 💔</p>
      )}

      <button
        type="button"
        disabled={page == 1}
        onClick={() =>
          router.push(`/search?search=${search}&page=${Number(page) - 1}`)
        }
      >
        Previos
      </button>
      <button
        type="button"
        onClick={() =>
          router.push(`/search?search=${search}&page=${Number(page) + 1}`)
        }
      >
        Next
      </button>

      {/* <button type="button" onClick={() => setPage((p) => p - 1)}>
        Previos
      </button>
      <button type="button" onClick={() => setPage((p) => p + 1)}>
        Next
      </button> */}
    </div>
  );
}
