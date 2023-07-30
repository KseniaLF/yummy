import { Button } from "../Button";
import { CardList } from "./CardList";

async function getDishes() {
  const res = await import("../../app/api/all/categories/route", {
    next: { revalidate: 60 },
  });
  const data = await (await res.GET()).json();
  return data.filteredByCategories;
}

export const DishList = async () => {
  const dishes = await getDishes();

  return (
    <div className="mt-40 ">
      {dishes.map((category) => {
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
