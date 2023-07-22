import { categories } from "../../../components/dish-list/data.json";
import { CategoriesList } from "../CategoriesList";

async function getRecipes(id) {
  try {
    // const data = await fetch(`/api?q=breakfast`);
    // const promiseA = new Promise((resolve) => {
    //   const filteredArr = categories.find((i) => i.name.toLowerCase() === id);
    //   resolve(filteredArr);
    // });
    // console.log(data.json());
    // return data.json();
    // fetch(`/api?q=breakfast`).then(() => {
    //   console.log(123);
    // });

    const res = await fetch("http://localhost:3000/api?q=breakfast");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function Post({ params: { id } }) {
  const { recipes } = await getRecipes(id);

  return (
    <>
      <CategoriesList recipeArr={recipes} />
    </>
  );
}
