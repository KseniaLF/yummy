import { Button } from "@/components/Button";
import { DishList } from "@/components/dish-list/DishList";

export default function Home() {
  return (
    <main className="container relative">
      <div className="custom-bg"></div>

      <div className="pt-14 md:pt-36 lg:pt-44 container text-center md:text-start">
        <h1 className="  text-6xl md:text-7xl lg:text-8xl">
          <span className="text-main">So</span>Yummy
        </h1>

        <p className="max-w-[350px] lg:max-w-[500px]  mt-4">
          What to cook? is not only a recipe app, it is, in fact, your cookbook.
          You can add your own recipes to save them for the future.
        </p>

        <div className="relative inline-block mt-[330px] md:mt-8 lg:mt-12">
          <input
            type="Enter the text"
            placeholder="Beef"
            className="py-4 md:py-5 lg:py-6 pl-7 lg:pl-10 pr-[135px] md:pr-[150px] lg:pr-[185px] w-[300px] md:w-[360px] lg:w-[500px] border-2 border-main hover:border-main outline-0 custom-rounded "
          ></input>

          <Button className="absolute top-0 right-0 border-2 border-second">
            Search
          </Button>
        </div>
      </div>

      <DishList />
    </main>
  );
}
