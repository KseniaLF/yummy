"use client";

import useSWR from "swr";
import { MyRecipeCard } from "@/components/my-recipes/Card";
import { toast } from "react-hot-toast";

async function getAllMyRecipes(url, userId) {
  try {
    const data = await fetch(`${url}`, {
      method: "GET",
      headers: {
        "X-User-Id": userId,
      },
    });
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

export default function MyRecipeList({ userId }) {
  const {
    data: recipes,
    mutate,
    error,
  } = useSWR(`/api/recipes/my`, (url) => getAllMyRecipes(url, userId), {
    revalidateOnFocus: false,
  });

  if (error) {
    return <p>Error</p>;
  }
  console.log(userId);
  if (!recipes) {
    return <p>loading</p>;
  }

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
