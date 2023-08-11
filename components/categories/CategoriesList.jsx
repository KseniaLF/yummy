import { Card } from "@/components/dish-list/Card";
import Link from "next/link";

export const CategoriesList = ({ recipeArr }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-8 md:mt-12">
      {recipeArr.map((recipe) => (
        <li className="relative" key={recipe._id}>
          <Link href={`/my/${recipe._id}`}>
            <Card
              image={recipe.image}
              name={recipe.dish}
              className="w-[100%] h-[320px] object-cover rounded-lg"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
