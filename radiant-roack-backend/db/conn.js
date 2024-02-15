import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://fasikaaga7:zerontous03@mongopractice.wstybzf.mongodb.net/testdb"
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error, "Error while connecting to database");
  }
};

export default Connection;