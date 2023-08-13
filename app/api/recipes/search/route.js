import Recipe from "@/models/recipe";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const searchValue = searchParams.get("search");
  const page = searchParams.get("page");

  try {
    await connectToDB();

    const itemsPerPage = 9;
    const skip = (Number(page) - 1) * itemsPerPage;

    const regex = new RegExp(searchValue, "i");

    const recipes = await Recipe.find({ dish: { $regex: regex } })
      .skip(skip)
      .limit(itemsPerPage);

    return NextResponse.json(recipes);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
