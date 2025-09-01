// routes/auth.js
import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Login User
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Check password
    if (user.password !== password) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // Login successful
    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
