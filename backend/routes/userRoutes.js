import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Create User
router.post("/", async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    const user = new User({ name, phone, email, password });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Sign Up Route
router.post("/signup", async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create new user
    const newUser = new User({ name, phone, email, password });
    await newUser.save();
    res.status(201).json({ message: "User signed up successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

export default router;
