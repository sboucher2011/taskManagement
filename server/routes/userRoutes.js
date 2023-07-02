import express from "express";
const router = express.Router();
import // authUser,
// registerUser,
// getUserProfile,
// updateUserProfile,
// getUsers,
// deleteUser,
// getUserById,
// updateUser,
"../endpoints/userEndpoints.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const { authUser, registerUser } = require("../endpoints/userEndpoints");

router.route("/signup").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
// router
//   .route("/profile")
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);
// router
//   .route("/:id")
//   .delete(protect, admin, deleteUser)
//   .get(protect, admin, getUserById)
//   .put(protect, admin, updateUser);

export default router;
