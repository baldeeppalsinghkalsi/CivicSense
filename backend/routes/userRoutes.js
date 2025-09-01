import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Create User
router.post("/", async (req, res) => {
  try {
    const { name, phone } = req.body;
    const user = new User({ name, phone });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

export default router;
