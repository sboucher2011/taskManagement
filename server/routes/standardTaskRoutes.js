import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import StandardTask from "../models/standardtasks.js";

// Create
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { title, description, frequency, chargeNumber } = req.body;
    const standardTask = new StandardTask({
      title,
      description,
      frequency,
      chargeNumber,
    });
    const newStandardTask = await standardTask.save();
    res.status(201).json(newStandardTask);
  })
);

// Get All
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const standardTask = await StandardTask.find({});

    res.json(standardTask);
  })
);

// Get single
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const standardTask = await StandardTask.findById(req.params.id);

    if (standardTask) {
      res.json(standardTask);
    } else {
      res.status(404);
      throw new Error("Standard Task found");
    }
  })
);

// Update
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const standardTask = await StandardTask.findById(req.params.id);

    if (standardTask) {
      standardTask.title = req.body.title || standardTask.title;
      standardTask.description =
        req.body.description || standardTask.description;
      standardTask.frequency = req.body.frequency || standardTask.frequency;
      standardTask.chargeNumber =
        req.body.chargeNumber || standardTask.chargeNumber;

      const updatedStandardTask = await standardTask.save();

      res.json({
        _id: updatedStandardTask._id,
        title: updatedStandardTask.title,
        description: updatedStandardTask.description,
        frequency: updatedStandardTask.frequency,
        chargeNumber: updatedStandardTask.chargeNumber,
      });
    } else {
      res.status(404);
      throw new Error("Standard Task not found");
    }
  })
);

// Delete
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const standardTask = await StandardTask.findById(req.params.id);
    if (standardTask) {
      await standardTask.remove();
      res.json({ message: "Standard Task deleted" });
    } else {
      res.status(404);
      throw new Error("Standard Task not found");
    }
  })
);

export default router;
