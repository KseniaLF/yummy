import { SearchButton } from "@/components/SearchButton";
import { DishList } from "@/components/dish-list/DishList";

export default function Home() {
  return (
    <main className="container relative cursor-default">
      <div className="custom-bg"></div>

      <div className="pt-14 md:pt-36 lg:pt-44 container text-center md:text-start">
        <h1 className="  text-6xl md:text-7xl lg:text-8xl">
          <span className="text-main">So</span>Yummy
        </h1>

        <p className="max-w-[350px] lg:max-w-[500px]  mt-4">
          What to cook? is not only a recipe app, it is, in fact, your cookbook.
          You can add your own recipes to save them for the future.
        </p>

        <SearchButton />
      </div>

      <DishList />
    </main>
  );
}
