// external
import express from "express";
import connectDB from "./config/db.js";
import path from "path";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";

// routes
import toDoRoutes from "./routes/todoRoutes.js";
import townRoutes from "./routes/townRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import standTaskRoutes from "./routes/standardTaskRoutes.js";

//----------------------------
// DATABASE CONNECTION
//----------------------------
dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/api/todo", toDoRoutes);
app.use("/api/towns", townRoutes);
app.use("/api/users", userRoutes);
app.use("/api/standardTasks", standTaskRoutes);

// deployment
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`You are connected on port ${PORT}`);
});
