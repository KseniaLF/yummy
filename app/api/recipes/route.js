import Recipe from "@/models/recipe";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectToDB();

    const recipes = await Recipe.find({}).populate("creator");

    return NextResponse.json(recipes);
    // return new Response(JSON.stringify(recipes), { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
