import Recipe from "@/models/recipe";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const searchValue = searchParams.get("search");

  try {
    await connectToDB();

    const regex = new RegExp(searchValue, "i");

    const recipes = await Recipe.find({ dish: { $regex: regex } });

    return NextResponse.json(recipes);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
