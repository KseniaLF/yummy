"use client";

import useSWRMutation from "swr/mutation";
import { LuTrash2 } from "react-icons/lu";
import { toast } from "react-hot-toast";

async function deleteMyRecipe(url, { arg }) {
  try {
    const data = await fetch(`/api/recipes/${arg}`, {
      method: "DELETE",
    });

    toast.success("Successfully deleted!");

    return data.json();
  } catch (error) {
    toast.sucerrcess("Something went wrong, try again");
    console.log(error);
  }
}

export const DeleteRecipeBtn = ({ recipeId }) => {
  const { trigger } = useSWRMutation("/api/recipes/my", deleteMyRecipe);

  return (
    <button
      type="button"
      className="p-[5px] md:p-2 lg:p-3 rounded-md bg-main text-base md:text-xl lg:text-2xl text-white"
      onClick={() => trigger(recipeId)}
    >
      <LuTrash2 />
    </button>
  );
};
