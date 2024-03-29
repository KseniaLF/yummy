import Recipe from "@/models/recipe";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectToDB();

    const recipes = await Recipe.find({}).populate("creator");

    const filteredByCategories = recipes.reduce((acc, recipe) => {
      const { category, dish, image, _id: id } = recipe;
      const categoryIndex = acc.findIndex((item) => item.name === category);

      if (categoryIndex !== -1) {
        acc[categoryIndex].recipes.push({ dish, image, id });
      } else {
        acc.push({
          name: category,
          recipes: [{ dish, image, id }],
        });
      }

      return acc;
    }, []);

    return NextResponse.json({ filteredByCategories });
    // return new Response(JSON.stringify(filteredByCategories), { status: 200 });
  } catch (error) {
    return NextResponse.json({ error });
    // return new Response(error, { status: 500 });
  }
};
