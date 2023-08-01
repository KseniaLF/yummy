"use client";

import { useSWRConfig } from "swr";
import useSWRMutation from "swr/mutation";

import { LuTrash2 } from "react-icons/lu";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

async function deleteFn(url, { arg }) {
  return fetch(`/api/recipes/${arg}`, {
    method: "DELETE",
  }).then((res) => res.json());
}

export const DeleteRecipeBtn = ({ recipeId }) => {
  // const config = useSWRConfig();

  const { trigger, isMutating } = useSWRMutation(
    "/api/recipes/my/64c4c5bc9bb0d57f895b6502",
    deleteFn
  );
  // console.log(config);

  const handleDeleteRecipe = async () => {
    try {
      trigger(recipeId);
      // const response = await fetch(`/api/recipes/123`, {
      //   method: "DELETE",
      // });

      // console.log(response);

      // if (response.ok) {
      //   console.log("yep~~~!");

      //   // mutate("/api/recipes/my/64c4c5bc9bb0d57f895b6502", console.log(data));
      // }

      console.log(11111);
    } catch (error) {
      console.log("no~~~!");
      //   console.log(error);
    }

    // 64c913d5ef836a9c42be0e6e
    // try {
    //   const response = await fetch(`/api/recipes/123`, {
    //     method: "DELETE",
    //   });

    //   if (response.ok) {
    //     console.log("yep~~~!");
    //   }

    //   console.log(11111);
    // } catch (error) {
    //   console.log("no~~~!");
    //   //   console.log(error);
    // }
  };

  return (
    <button
      type="button"
      className="p-[5px] md:p-2 lg:p-3 rounded-md bg-main text-base md:text-xl lg:text-2xl text-white"
      onClick={handleDeleteRecipe}
    >
      <LuTrash2 />
    </button>
  );
};
