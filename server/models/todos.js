const mongoose = require("mongoose");

const ToDoScchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("Todo", ToDoScchema);

export default Todo;
