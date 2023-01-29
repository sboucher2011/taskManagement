import mongoose from "mongoose";

const ToDoScchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", ToDoScchema);

export default Todo;
