const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const ToDoModal = require("./modals/todos");
require("dotenv").config();

// routes
import toDoRoutes from "./routes/todoRoutes.js";

app.use(cors());
app.use(express.json());

// routes
app.use("/api/todos", toDoRoutes);

// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true });

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`You are connected on port ${PORT}`);
});
