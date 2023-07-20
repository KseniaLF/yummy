import { SectionTitle } from "@/components/UI/SectionTitle";
import Link from "next/link";
import { categories } from "../../components/dish-list/data.json";

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

      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.name}>
            <Link href={`/about/${recipe.name}`}>- {recipe.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
