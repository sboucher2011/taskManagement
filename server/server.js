// external
import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

//----------------------------
// DATABASE CONNECTION
//----------------------------
dotenv.config();

connectDB();

const app = express();

// // app.use(cors());
// app.use(express.json());

// // routes
// //app.use("/api/todos", toDoRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`You are connected on port ${PORT}`);
});
