import Link from "next/link";
import { Card } from "./Card";

export const CardList = ({ recipeArr }) => {
  return (
    <ul className="flex gap-4 justify-center">
      {recipeArr.map((recipe, index) => (
        <li
          className={`relative ${index === 1 && "hidden md:block"}
           ${index >= 2 && "hidden md:hidden lg:block"} `}
          key={recipe.dish}
        >
          {console.log(recipe)}
          <Link href={`/about/${recipe.name}`}>
            <Card
              name={recipe.dish}
              image={recipe.image}
              className="w-[300px] h-[320px] object-cover rounded-lg"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
