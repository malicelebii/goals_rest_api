import express from "express";
import { registerUser, login, getMe } from "../controllers/userController.js";
import { protect } from "../middlewares/auth.js";
// import { createGoal, deleteGoal, getGoal, getGoals, updateGoal } from "../controllers/goalController.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/:userId", login);

router.get("/getme", protect, getMe);

// router.post("/", createGoal);

// router.put("/:goalId", updateGoal);

// router.delete("/:goalId", deleteGoal);

export default router;
