import Recipe from "@/models/recipe";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const id = params.id;

  try {
    await connectToDB();

    const recipes = await Recipe.findOne({ _id: id });

    return NextResponse.json(recipes);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
