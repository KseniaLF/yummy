"use client";

import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Add() {
  const router = useRouter();
  const { data: session } = useSession();
  const type = "Create";

  const [submitting, setIsSubmitting] = useState(false);
  const [recipe, setPost] = useState({ dish: "" });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(session.user.id);

    try {
      const response = await fetch(`${process.env.BASE_URL}/api/recipes/add`, {
        method: "POST",
        body: JSON.stringify({
          userId: session.user.id,
          dish: recipe.dish,
          category: "Miscellaneous",
          image:
            "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1158&q=80",
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container ">
      <SectionTitle>Add Recipe</SectionTitle>

      <form onSubmit={createPrompt}>
        <label>Dish NAME</label>

        <div>
          <textarea
            value={recipe.dish}
            onChange={(e) => setPost({ ...recipe, dish: e.target.value })}
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
      </form>
    </main>
  );
}
