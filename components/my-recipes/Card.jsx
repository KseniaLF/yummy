import Image from "next/image";
import { LuTrash2 } from "react-icons/lu";

export const MyRecipeCard = ({ recipe }) => {
  return (
    <div className="flex gap-3.5 md:gap-7 lg:gap-14 py-3 px-2 md:p-6 lg:p-10 justify-center rounded-lg bg-white">
      <div className="w-[55vw] max-w-[500px] min-w-[124px] md:min-w-[230px] lg:min-w-[320px]">
        {recipe.image && (
          <Image
            src={recipe.image}
            alt="recipe image"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full h-full"
          />
        )}
      </div>

      <div className="text-xs md:text-sm lg:text-lg between flex-col gap-3 md:gap-4 lg:gap-5">
        <div className="between">
          <p className="text-sm md:text-2xl">{recipe.dish}</p>

          <button
            type="button"
            className="p-[5px] md:p-2 lg:p-3 rounded-md bg-main text-base md:text-xl lg:text-2xl text-white"
          >
            <LuTrash2 />
          </button>
        </div>

        <p className="hide-text max-w-[90%]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          placeat aperiam odio et quisquam unde dolorum quo officiis hic error.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          doloremque magni maiores molestiae sapiente suscipit explicabo enim
          quisquam ducimus sed!
        </p>

        <div className="between items-center mt-4">
          <span>20 min</span>

          <button
            type="button"
            className="text-xs md:text-sm lg:text-base text-white custom-rounded bg-second py-2 md:py-3 px-4 md:px-8 hover-bg "
          >
            See recipe
          </button>
        </div>
      </div>
    </div>
  );
};
