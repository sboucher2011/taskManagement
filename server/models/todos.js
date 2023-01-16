import mongoose from "mongoose";

const ToDoScchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", ToDoScchema);

export default Todo;
