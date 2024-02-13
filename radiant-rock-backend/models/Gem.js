import mongoose from "mongoose";

const gemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    polished: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    collection: "gems",
  }
);

const GemModel = mongoose.model("gems", gemSchema);

export default GemModel;