import { Card } from "@/components/dish-list/Card";
import Link from "next/link";

export const CategoriesList = ({ recipeArr }) => {
  console.log(recipeArr);

  return (
    <ul className="flex flex-wrap gap-4 justify-center mt-8 md:mt-12">
      {recipeArr.map((recipe) => (
        <li className="relative" key={recipe._id}>
          <Link href={`/my/${recipe._id}`}>
            <Card
              name={recipe.dish}
              className="w-[300px] h-[320px] object-cover rounded-lg"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
