import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Town from "../models/towns.js";

// Create Town
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { title, description } = req.body;
    const town = new Town({ title, description });
    const newTown = await town.save();
    res.status(201).json(newTown);
  })
);

// Get All Towns
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const town = await Town.find({});

    res.json(town);
  })
);

// Get single Town
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const town = await Town.findById(req.params.id);

    if (town) {
      res.json(town);
    } else {
      res.status(404);
      throw new Error("Town not found");
    }
  })
);

// Update Town
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const town = await Town.findById(req.params.id);

    if (town) {
      town.title = req.body.title || town.title;
      town.description = req.body.description || town.description;

      const updatedTown = await town.save();

      res.json({
        _id: updatedTown._id,
        title: updatedTown.name,
        description: updatedTown.email,
      });
    } else {
      res.status(404);
      throw new Error("Town not found");
    }
  })
);

// Delete town
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const town = await Town.findById(req.params.id);
    if (town) {
      await town.remove();
      res.json({ message: "Town deleted" });
    } else {
      res.status(404);
      throw new Error("Town not found");
    }
  })
);

export default router;
