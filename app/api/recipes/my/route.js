import Recipe from "@/models/recipe";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export const GET = async (req) => {
  const headersInstance = headers();
  const userId = headersInstance.get("x-user-id");

  try {
    await connectToDB();

    const recipes = await Recipe.find({ creator: userId });

    return NextResponse.json(recipes);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
