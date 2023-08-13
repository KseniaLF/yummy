import Link from "next/link";
import { CardList } from "./CardList";

async function getDishes() {
  const res = await import("../../app/api/recipes/categories/route", {
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
            <h2 className="capitalize text-[44px]">{category.name}</h2>

            <CardList recipeArr={category.recipes} />

            <div className="text-end ">
              <span className="hover-btn-second px-8 py-3 rounded-md cursor-pointer">
                <Link href={`/categories/${category.name}`}>See all</Link>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
