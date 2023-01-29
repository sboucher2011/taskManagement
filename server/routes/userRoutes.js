import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import User from "../models/user.js";

// Create User
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const {
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      address,
      city,
      state,
      title,
      role,
    } = req.body;
    const user = new User({
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      address,
      city,
      state,
      title,
      role,
    });
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
      user.firstName = req.body.firstName || user.firstName;
      user.lastName = req.body.lastName || user.lastName;
      user.emailAddress = req.body.emailAddress || user.emailAddress;
      user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
      user.address = req.body.address || user.address;
      user.city = req.body.city || user.city;
      user.state = req.body.state || user.state;
      user.title = req.body.title || user.title;
      user.role = req.body.role || user.role;

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        emailAddress: updatedUser.emailAddress,
        phoneNumber: updatedUser.phoneNumber,
        address: updatedUser.address,
        city: updatedUser.city,
        state: updatedUser.state,
        title: updatedUser.title,
        role: updatedUser.role,
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
