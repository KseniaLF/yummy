import Recipe from "@/models/recipe";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const recipes = await Recipe.find({}).populate("creator");
    console.log(recipes);

    return new Response(JSON.stringify(recipes), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
