import { Card } from "@/components/dish-list/Card";
import Link from "next/link";

export const CategoriesList = ({ recipeArr }) => {
  return (
    <ul className="flex flex-wrap gap-4 justify-center mt-8 md:mt-12">
      {recipeArr.map((recipe) => (
        <li className="relative" key={recipe.dish}>
          <Link href={`/about/${recipe.name}`}>
            <Card name={recipe.dish} className="w-[300px] rounded-lg" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
