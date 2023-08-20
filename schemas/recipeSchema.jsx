import * as z from "zod";

export const recipeSchema = z.object({
  dish: z.string().min(2, {
    message: "dish must be at least 2 characters.",
  }),
  category: z.string(),
  description: z.string().nonempty("Field is required"),
  time: z.string(),
});
