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

export const DELETE = async (request, { params }) => {
  const id = params.id;

  try {
    await connectToDB();

    await Recipe.findByIdAndRemove(id);

    return NextResponse.json("Recipe deleted successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json("Error deleting recipe", { status: 500 });
  }
};
