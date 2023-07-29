import Recipe from "@/models/recipe";
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
  const { userId, dish, category, image } = await req.json();

  try {
    await connectToDB();

    const newRecipe = new Recipe({ creator: userId, dish, category, image });

    await newRecipe.save();

    return new Response(JSON.stringify(newRecipe), { status: 201 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
