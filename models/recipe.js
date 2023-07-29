import { Schema, model, models } from "mongoose";

import "./user";

const RecipeSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Creator is required"],
  },
});

const Recipe = models.Recipe || model("Recipe", RecipeSchema);

export default Recipe;
