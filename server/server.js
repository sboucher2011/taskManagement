// external
import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// routes
import toDoRoutes from "./routes/todoRoutes.js";

//----------------------------
// DATABASE CONNECTION
//----------------------------
dotenv.config();

connectDB();

const app = express();

// routes
app.use("/api/todo", toDoRoutes);

// middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`You are connected on port ${PORT}`);
});
