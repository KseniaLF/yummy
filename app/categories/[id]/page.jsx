import { CategoriesList } from "../../../components/categories/CategoriesList";
import { headers } from "next/headers";

async function getRecipes({ host, id }) {
  try {
    const res = await fetch(`http://${host}/api/recipes/categories/${id}`, {
      method: "GET",
    });

    const data = await res.json();
    return data.recipes;
  } catch (error) {
    console.log(error);
  }
}

export default async function Post({ params: { id } }) {
  const host = headers().get("host");
  const recipes = await getRecipes({ host, id });

  return (
    <>
      <CategoriesList recipeArr={recipes} />
    </>
  );
}
