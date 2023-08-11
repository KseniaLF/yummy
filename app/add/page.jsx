"use client";

import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/UI/SectionTitle";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import { Input } from "@/components/UI/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import { Textarea } from "@/components/UI/textarea";
import { SelectCategory } from "@/components/add-dish/selectCategory";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const categories = ["miscellaneous", "breakfast", "chicken", "desserts"];

export default function Add() {
  const router = useRouter();
  const { data: session } = useSession();
  const type = "Create";

  const [submitting, setIsSubmitting] = useState(false);
  const [recipe, setRecipe] = useState({ dish: "", category: "" });

  const form = useForm({
    defaultValues: {
      dish: "",
      category: "breakfast",
      description: "",
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

  const handleCategoryChange = (category) => {
    console.log("Selected category:", category);
    setRecipe({ ...recipe, category });
  };

  return (
    <main className="container">
      <SectionTitle>Add Recipe</SectionTitle>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(createRecipe)} className="space-y-8">
          <FormField
            control={form.control}
            name="dish"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dish name</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>This is your Dish name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue="breakfast">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
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

          <Button type="submit" disabled={submitting}>
            {submitting ? `Creating...` : type}
          </Button>
        </form>
      </Form>
    </main>
  );
}
