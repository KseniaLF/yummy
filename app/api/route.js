import { NextResponse } from "next/server";
import { categories } from "./categories";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  let currentCategories = categories;

  if (query) {
    currentCategories = categories.find((i) => i.name.toLowerCase() === query);
  }

  return NextResponse.json(currentCategories);
}

export async function POST(req) {
  const body = await req.json();
  return NextResponse.json({ body });
}
