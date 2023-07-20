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
          <Link href={`/about/${recipe.name}`}>
            <Card name={recipe.dish} />
          </Link>
        </li>
      ))}
    </ul>
  );
};