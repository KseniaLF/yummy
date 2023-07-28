import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already in use"],
    required: [true, "Email is required"],
  },
  //   usermame: {
  //     type: String,
  //     required: [true, "Email is required"],
  //   },
  //   image: {
  //     type: String,
  //   },
});

const User = models.User || model("User", UserSchema);

export default User;
