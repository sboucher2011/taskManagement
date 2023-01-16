import asyncHandler from "express-async-handler";
import Todo from "../models/todos.js";

// @desc    Create new to do
// @route   POST /api/todo
// @access  Private
const addToDo = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const todo = new Todo({
    name,
  });

  const createdTodo = await todo.save();

  res.status(201).json(createdTodo);
});

// @desc    Get todo by ID
// @route   GET /api/todo/:id
// @access  Private
const getTodoById = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id).populate("name");

  if (todo) {
    res.json(todo);
  } else {
    res.status(404);
    throw new Error("Todo not found");
  }
});

// @desc    Update todo
// @route   GET /api/todo/:id
// @access  Private
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (todo) {
    // order.isPaid = true;
    // order.paidAt = Date.now();
    // order.paymentResult = {
    //   id: req.body.id,
    //   status: req.body.status,
    //   update_time: req.body.update_time,
    //   email_address: req.body.payer.email_address,
    // };

    const updatedTodo = await todo.save();

    res.json(updatedTodo);
  } else {
    res.status(404);
    throw new Error("To do not found");
  }
});

// @desc    Get logged in user todos
// @route   GET /api/todo/mytodo
// @access  Private
const getMyTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ user: req.user._id });
  res.json(todos);
});

// @desc    Get all to dos
// @route   GET /api/todos
// @access  Private/Admin
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({}).populate("user", "id name");
  res.json(todos);
});

export { addToDo, getTodoById, updateTodo, getMyTodos, getTodos };
