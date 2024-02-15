import User from "../models/user.js";
import bcryptjs from "bcryptjs";

export const usersignup = async (req, res, next) => {
  try {
    const { fullName, phone, email, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = new User({
      fullName,
      phone,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    const result = await user.save();
    res.status(201).json({
      message: "User created",
      result,
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      error: error.message || "An error occurred",
    });
  }
};

export const usersignin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Auth failed",
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (isMatch) {
      return res.status(200).json({
        message: "Auth successful",
      });
    } else {
      return res.status(401).json({
        message: "Auth failed",
      });
    }
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      error: error.message || "An error occurred",
    });
  }
};
