import Recipe from "@/models/recipe";
import { connectToDB } from "@/utils/database";
import { getImgFromUnsplash } from "@/utils/unsplash-fetch";

export const POST = async (req) => {
  const { userId, dish, category, image } = await req.json();

  let updatedImage = image;
  try {
    if (!image) {
      const randomImage = await getImgFromUnsplash(dish);

      if (randomImage) updatedImage = randomImage;
    }

    await connectToDB();

    const newRecipe = new Recipe({
      creator: userId,
      dish,
      category,
      image: updatedImage,
    });

    await newRecipe.save();

    return new Response(JSON.stringify(newRecipe), { status: 201 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
