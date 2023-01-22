import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import User from "../models/user.js";

// Create User
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { title, description } = req.body;
    const user = new User({ title, description });
    const newUser = await user.save();
    res.status(201).json(newUser);
  })
);

// Get All Users
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const user = await User.find({});

    res.json(user);
  })
);

// Get single User
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
      res.json(user);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

// Update User
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
      user.title = req.body.title || user.title;
      user.description = req.body.description || user.description;

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        title: updatedUser.name,
        description: updatedUser.email,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

// Delete User
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      await user.remove();
      res.json({ message: "User deleted" });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

export default router;
