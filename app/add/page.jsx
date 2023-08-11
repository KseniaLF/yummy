"use client";

import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { SelectCategory } from "@/components/add-dish/selectCategory";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Add() {
  const router = useRouter();
  const { data: session } = useSession();
  const type = "Create";

  const [submitting, setIsSubmitting] = useState(false);
  const [recipe, setRecipe] = useState({ dish: "", category: "" });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const toastId = toast.loading("Please wait...");

    try {
      const response = await axios.post(`/api/recipes/add`, {
        userId: session?.user.id,
        dish: recipe.dish,
        category: recipe.category,
      });
      toast.success("The recipe was created 🎉", {
        id: toastId,
      });
      // router.push("/my");
    } catch (error) {
      toast.error("Something went wrong, try again. " + error.message, {
        id: toastId,
      });
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCategoryChange = (category) => {
    console.log("Selected category:", category);
    setRecipe({ ...recipe, category });
  };

  return (
    <main className="container ">
      <SectionTitle>Add Recipe</SectionTitle>

      <form onSubmit={createPrompt}>
        <label>Dish NAME</label>

        <div>
          <textarea
            value={recipe.dish}
            onChange={(e) => setRecipe({ ...recipe, dish: e.target.value })}
            placeholder="Write your dish here"
            required
          />
        </div>

        <div className="flex gap-4">
          <Link href="/add" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <Button type="submit" disabled={submitting}>
            {submitting ? `Creating...` : type}
          </Button>
        </div>

        <SelectCategory onCategoryChange={handleCategoryChange} />
      </form>
    </main>
  );
}
