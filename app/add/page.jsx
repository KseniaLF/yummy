"use client";

import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/UI/SectionTitle";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import { Input } from "@/components/UI/input";
import { Textarea } from "@/components/UI/textarea";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { recipeSchema } from "@/schemas/recipeSchema";
import { CategoryFormField } from "@/components/form/CategoryFormField";
import { TimeFormField } from "@/components/form/TimeFormField";

export default function Add() {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(recipeSchema),
    defaultValues: {
      dish: "",
      category: "breakfast",
      description: "",
      time: "30",
    },
  });

  const createRecipe = async (dishData) => {
    console.log(dishData);
    setIsSubmitting(true);

    const toastId = toast.loading("Please wait...");

    try {
      const response = await axios.post(`/api/recipes/add`, {
        userId: session?.user.id,
        ...dishData,
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

  return (
    <main className="container">
      <SectionTitle>Add Recipe</SectionTitle>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(createRecipe)}
          className="space-y-8 max-w-md m-auto"
        >
          <FormField
            control={form.control}
            name="dish"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dish name</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <CategoryFormField control={form.control} />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about dish"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <TimeFormField control={form.control} />

          <Button type="submit" disabled={submitting}>
            {submitting ? `Creating...` : "Create"}
          </Button>
        </form>
      </Form>
    </main>
  );
}
