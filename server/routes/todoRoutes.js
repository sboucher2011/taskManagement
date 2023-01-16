import express from "express";

const router = express.Router();
import {
  addToDo,
  getTodoById,
  updateTodo,
  getMyTodos,
  getTodos,
} from "../controllers/orderController.js";
// import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addToDo).get(protect, admin, getTodos);
router.route("/mytodos").get(protect, getMyTodos);
router.route("/:id").get(protect, getTodoById);
router.route("/:id").put(protect, updateTodo);

export default router;

// app.post("/addTodo", async (req, res) => {
//     const name = req.body.name;
//     const todo = new ToDoModal({ name: name });
//     await todo.save();
//     res.send("Insterted Data");
//   });

//   app.get("/read", async (req, res) => {
//     await ToDoModal.find({}, (err, result) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send(result);
//       }
//     });
//   });

//   app.put("/update", async (req, res) => {
//     const newName = req.body.newName;
//     const id = req.body.id;
//     try {
//       await ToDoModal.findById(id, (error, todoToUpdate) => {
//         todoToUpdate.name = newName;
//         todoToUpdate.save();
//       });
//     } catch (err) {
//       console.log(err);
//     }
//     res.send("updated");
//   });
