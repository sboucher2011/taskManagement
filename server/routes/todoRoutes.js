import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Todo from "../models/todos.js";

// Create Todo
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { title, description } = req.body;
    const todo = new Todo({ title, description });
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  })
);

// Get All Todo
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const todo = await Todo.find({});

    res.json(todo);
  })
);

// Get single Todo
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

// Update Todo
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (todo) {
      todo.title = req.body.title || todo.title;
      todo.description = req.body.description || todo.description;

      const updatedTodo = await todo.save();

      res.json({
        _id: updatedTodo._id,
        title: updatedTodo.name,
        description: updatedTodo.email,
      });
    } else {
      res.status(404);
      throw new Error("To do not found");
    }
  })
);

// Delete to do
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      await todo.remove();
      res.json({ message: "To do deleted" });
    } else {
      res.status(404);
      throw new Error("To do not found");
    }
  })
);

export default router;
