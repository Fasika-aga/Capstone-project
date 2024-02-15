import express from "express";
const app = express();

import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import credentials from "./middlewares/credentials.js";
import DB from "./db/conn.js";
import corsOptions from "./middlewares/corsOption.js";

const PORT = 8080;

DB();

app.use(credentials);

app.use(morgan("tiny"));

app.use(cors(corsOptions));
// Allow all origins
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("hitted on root : ", req.headers["user-agent"]);
  res.status(200).json("Hello World!");
});

// ============================ Routes  ======================================

import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";

app.use("/user", userRouter);
app.use("/product", productRouter);

// ===============================Routes End==================================

app.all("*", (req, res) => {
  res.sendStatus(404);
});

mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`server is listening at port : ${PORT}`);
  });
});
