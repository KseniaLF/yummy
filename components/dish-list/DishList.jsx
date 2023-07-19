import Image from "next/image";
import { categories } from "./data.json";

export const DishList = ({ title, dishesArr }) => {
  console.log(categories[0]);

  return (
    <div className="mt-40">
      {categories.map((category) => {
        return (
          <div className="mt-16" key={category.name}>
            <h1>{category.name}</h1>

            <ul className="flex gap-4">
              {category.recipes.map((recipe) => (
                <li className="relative" key={recipe.dish}>
                  <Image
                    className="rounded-lg object-cover "
                    src="/i.jpg"
                    alt="Logo"
                    width={300}
                    height={320}
                  />
                  <div className="absolute inset-x-5 bottom-5 rounded-lg text-center p-4 bg-white hover-bg">
                    {recipe.dish}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
