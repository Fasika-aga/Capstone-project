import mongoose from "mongoose";
let { ObjectId } = mongoose.Types;

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);