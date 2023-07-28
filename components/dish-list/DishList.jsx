import { categories } from "./data.json";
import { Button } from "../Button";
import { CardList } from "./CardList";

export const DishList = ({ title, dishesArr }) => {
  return (
    <div className="mt-40 ">
      {categories.map((category) => {
        return (
          <div className="mt-24 flex flex-col gap-12" key={category.name}>
            <h2 className="text-[44px]">{category.name}</h2>

            <CardList recipeArr={category.recipes} />

            <div className="text-end">
              <Button>See all</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
