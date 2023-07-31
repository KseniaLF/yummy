import Recipe from "@/models/recipe";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const id = params.id;

  try {
    await connectToDB();

    const recipes = await Recipe.find({ category: id });

    return NextResponse.json({ recipes });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
