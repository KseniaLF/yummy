"use client";

import useSWRMutation from "swr/mutation";
import { LuTrash2 } from "react-icons/lu";

async function deleteMyRecipe(url, { arg }) {
  try {
    const data = await fetch(`/api/recipes/${arg}`, {
      method: "DELETE",
    });
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

export const DeleteRecipeBtn = ({ recipeId }) => {
  const { trigger } = useSWRMutation(
    "/api/recipes/my/64c4c5bc9bb0d57f895b6502",
    deleteMyRecipe
  );

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
