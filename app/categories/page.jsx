import { SectionTitle } from "@/components/UI/SectionTitle";
import { categories } from "../../components/dish-list/data.json";
import { CategoriesList } from "./CategoriesList";

async function getPokemons() {
  try {
    const promiseA = new Promise((resolve) => {
      resolve(categories);
    });
    return await promiseA;
  } catch (error) {
    console.error(error);
  }
}

export default async function About() {
  const recipes = await getPokemons();

  return (
    <main className="container">
      <SectionTitle>Categories</SectionTitle>

      <ul className="flex gap-2">
        {recipes.map((recipe) => (
          <li key={recipe.name}>{recipe.name}</li>
        ))}
      </ul>

      <CategoriesList recipeArr={recipes[0].recipes} />
    </main>
  );
}
