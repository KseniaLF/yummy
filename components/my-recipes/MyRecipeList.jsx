"use client";

import useSWR from "swr";
import { MyRecipeCard } from "@/components/my-recipes/Card";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function MyRecipeList({ userId }) {
  const { data: recipes, mutate } = useSWR(
    `/api/recipes/my/${userId}`,
    fetcher
  );

  return (
    <>
      {recipes && (
        <ul className="flex flex-col-reverse gap-4">
          {recipes.map((recipe) => (
            <li key={recipe._id}>
              <MyRecipeCard recipe={recipe} />
            </li>
          ))}
        </ul>
      )}

      {recipes?.length === 0 && (
        <p className="text-center">There are no recipes here yet 💔</p>
      )}
    </>
  );
}
