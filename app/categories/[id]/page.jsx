import { categories } from "../../../components/dish-list/data.json";
import { CategoriesList } from "../CategoriesList";

async function getPokemons(id) {
  try {
    const promiseA = new Promise((resolve) => {
      const filteredArr = categories.find((i) => i.name.toLowerCase() === id);

      resolve(filteredArr);
    });

    // await new Promise((resolve) => setTimeout(resolve, 10000)); // so good!!!
    return promiseA;
  } catch (error) {
    console.error(error);
  }
}

export default async function Post({ params: { id } }) {
  const { recipes } = await getPokemons(id);

  return (
    <>
      <CategoriesList recipeArr={recipes} />
    </>
  );
}
