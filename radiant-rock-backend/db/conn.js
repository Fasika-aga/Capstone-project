import mongoose from "mongoose";
export async function conn() {
  try {
    await mongoose.connect("mongodb+srv://fasikaaga7:zerontous03@mongopractice.wstybzf.mongodb.net/testdb");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
  }
}
