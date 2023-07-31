import Link from "next/link";
import { Card } from "./Card";

export const CardList = ({ recipeArr }) => {
  return (
    <ul className="flex gap-4 justify-center">
      {recipeArr.map((recipe, index) => (
        <li
          className={`relative ${index === 1 && "hidden md:block"}
           ${index >= 2 && "hidden md:hidden lg:block"} `}
          key={recipe.id}
        >
          <Link href={`/my/${recipe.id}`}>
            <Card
              name={recipe.dish}
              image={recipe.image}
              className="h-[320px] object-cover rounded-lg"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
