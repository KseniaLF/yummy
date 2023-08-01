import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import Image from "next/image";

import { SectionTitle } from "@/components/UI/SectionTitle";
import { MyRecipeCard } from "@/components/my-recipes/Card";

async function getMyRecipes({ host, userId }) {
  try {
    const res = await fetch(`http://${host}/api/recipes/my/${userId}`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function MyRecipes() {
  const session = await getServerSession(authConfig);
  const userId = session?.user.id;

  const host = headers().get("host");
  const recipes = await getMyRecipes({ host, userId });
  console.log(recipes);

  return (
    <div className="container">
      <SectionTitle>my recipes</SectionTitle>

      <ul className="flex flex-col gap-4">
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <MyRecipeCard recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
}
