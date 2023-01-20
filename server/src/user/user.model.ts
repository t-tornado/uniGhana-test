import mongoose, { Schema } from "mongoose";
export interface UserType {
  username?: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<UserType>({
  email: String,
  password: String,
  username: { type: String, required: false },
});

export const UserModel = mongoose.model("user", UserSchema);
