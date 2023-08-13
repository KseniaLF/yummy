"use client";

import { SearchButton } from "@/components/SearchButton";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { CategoriesList } from "@/components/categories/CategoriesList";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/recipes/search?search=" + search);
      setRecipes(data);
    };
    fetchData();
  }, [search]);

  return (
    <div className="container">
      <SectionTitle>Search</SectionTitle>

      <SearchButton search={search} />

      <CategoriesList recipeArr={recipes} />
    </div>
  );
}
