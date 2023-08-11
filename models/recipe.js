import { Schema, model, models } from "mongoose";

import User from "./user";

const RecipeSchema = new Schema(
  {
    dish: {
      type: String,
      required: [true, "Dish is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: [true, "Creator: userId is required"],
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    // status: {
    //   type: String,
    //   enum: ["default", "favorite"],
    //   default: "default",
    // },
    category: {
      type: String,
      enum: ["miscellaneous", "breakfast", "chicken", "desserts"],
      default: "miscellaneous",
    },
  },
  { timestamps: true, versionKey: false }
);

const Recipe = models.Recipe || model("Recipe", RecipeSchema);

export default Recipe;
