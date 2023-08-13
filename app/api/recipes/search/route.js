import Recipe from "@/models/recipe";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { value } = await req.json();

  try {
    await connectToDB();

    const regex = new RegExp(value, "i");

    const recipes = await Recipe.find({ dish: { $regex: regex } });

    return NextResponse.json(recipes);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
