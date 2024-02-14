import express from "express";
import { usersignup, usersignin } from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from user router");
});

// POST /user/signup
router.post("/signup", usersignup);

// POST /user/signin
router.post("/signin", usersignin);

export default router;