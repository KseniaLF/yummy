import { categories } from "../../../components/dish-list/data.json";
import { CategoriesList } from "../CategoriesList";

// async function getRecipes(id) {
//   try {
//     const res = await import("../../api/recipes/categories/[id]/route");
//     // const res = await fetch(
//     //   "http://localhost:3000/api/recipes/categories/breakfast",
//     //   { method: "GET" }
//     // );

//     const data = await (await res.GET()).json();
//     console.log(data);
//     console.log(222);

//     return data;
//   } catch (error) {
//     console.log(111111111);
//     console.log(error);
//   }
// }

async function getRecipes(id) {
  try {
    const res = await fetch(
      "http://localhost:3000/api/recipes/categories/breakfast",
      { method: "GET" }
    );

    const data = await res.json();
    return data.recipes;
  } catch (error) {
    console.log(error);
  }
}

export default async function Post({ params: { id } }) {
  const recipes = await getRecipes(id);

  return (
    <>
      <CategoriesList recipeArr={recipes} />
    </>
  );
}

// async function getRecipes(id) {
//   try {
//     const res = await fetch(
//       "http://localhost:3000/api/recipes/categories/breakfast",
//       { method: "GET" }
//     );

//     const data = await res.json();
//     return data.recipes;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function getRecipes(id) {
//   try {
//     const res = await import(`../../api/all/categories/${id}/route`);

//     console.log(22222222222222122);

//     return await (await res.GET()).json();
//   } catch (error) {
//     console.log(1111111111111111111);

//     console.log(error);
//   }
// }
