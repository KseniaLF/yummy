"use client";

import { SearchButton } from "@/components/SearchButton";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { Button } from "@/components/UI/button";
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
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/recipes/search?page=${page}&search=${search}`
        );

        setTotalPages(data.totalPages);
        setRecipes(data.recipes);
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

      <div className="text-center mt-20">
        <Button
          type="button"
          disabled={page == 1}
          onClick={() =>
            router.push(`/search?search=${search}&page=${Number(page) - 1}`)
          }
          className="mr-3"
        >
          Previos
        </Button>
        <Button
          type="button"
          disabled={page == totalPages}
          onClick={() =>
            router.push(`/search?search=${search}&page=${Number(page) + 1}`)
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
}
