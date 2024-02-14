import mongoose from "mongoose";

const gemSchema = new mongoose.Schema(
  {
    
name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  mohsScaleHardness: {
    type: Number,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  pricePerCarat: {
    type: Number,
    required: true
  }
});

const Gemstone = mongoose.model('Gemstone', gemstoneSchema);

module.exports = Gemstone;

const GemModel = mongoose.model("gems", gemSchema);

export default GemModel;