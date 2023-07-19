import Image from "next/image";
import { categories } from "./data.json";
import { Button } from "../Button";

export const DishList = ({ title, dishesArr }) => {
  console.log(categories[0]);

  return (
    <div className="mt-40 ">
      {categories.map((category) => {
        return (
          <div className="mt-24 flex flex-col gap-12" key={category.name}>
            <h2 className="text-[44px]">{category.name}</h2>

            <ul className="flex gap-4 justify-center">
              {category.recipes.map((recipe, index) => (
                <li
                  className={`relative ${index === 1 && "hidden md:block"}
                   ${
                     index >= 2 &&
                     "hidden md:hidden lg:block" /* Скрываем элементы, индекс которых >= 2, только на медиа-запросах ширины экрана >= 768px */
                   } `}
                  key={recipe.dish}
                >
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

            <div className="text-end">
              <Button>See all</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
