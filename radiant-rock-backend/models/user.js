import mongoose from "mongoose";
let { ObjectId } = mongoose.Types;

const userSchema = new mongoose.Schema(
  {
    fullName: String,
    phone: Number,
    email: String,
    password: String,
  },
  { timestamps: true }
);

export default mongoose.model("Users", userSchema);