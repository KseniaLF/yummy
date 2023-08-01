"use client";

// import { authConfig } from "@/configs/auth";
// import { getServerSession } from "next-auth";
// import Image from "next/image";

import { SectionTitle } from "@/components/UI/SectionTitle";
import { MyRecipeCard } from "@/components/my-recipes/Card";

import useSWR from "swr";

async function getMyRecipes() {
  try {
    const res = await fetch("/api/recipes/my/64c4c5bc9bb0d57f895b6502");
    const data = await res.json();
    console.log(res);
    return data;
  } catch (error) {
    console.log(error);
  }
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function MyRecipes() {
  // const session = await getServerSession(authConfig);
  // const userId = session?.user.id;

  const { data: recipes, mutate } = useSWR(
    "/api/recipes/my/64c4c5bc9bb0d57f895b6502",
    fetcher
  );

  console.log(recipes);

  return (
    <div className="container">
      <SectionTitle>my recipes</SectionTitle>

      {recipes && (
        <ul className="flex flex-col gap-4">
          {recipes.map((recipe) => (
            <li key={recipe._id}>
              <MyRecipeCard recipe={recipe} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
