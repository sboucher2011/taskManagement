import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Todo from "../models/todos.js";

// Get All Products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const todo = await Todo.find({});

    res.json(todo);
  })
);

// Get single Product
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (todo) {
      res.json(todo);
    } else {
      res.status(404);
      throw new Error("Todo not found");
    }
  })
);

export default router;
