import Recipe from "@/models/recipe";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const recipes = await Recipe.find({}).populate("creator");

    const filteredByCategories = recipes.reduce((acc, recipe) => {
      const { category, dish, image } = recipe;
      const categoryIndex = acc.findIndex((item) => item.name === category);

      if (categoryIndex !== -1) {
        acc[categoryIndex].recipes.push({ dish, image });
      } else {
        acc.push({
          name: category,
          recipes: [{ dish, image }],
        });
      }

      return acc;
    }, []);

    console.log(filteredByCategories);

    return new Response(JSON.stringify(filteredByCategories), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
