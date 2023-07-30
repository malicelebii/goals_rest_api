import express from "express";
import { registerUser,login } from "../controllers/userController.js";
// import { createGoal, deleteGoal, getGoal, getGoals, updateGoal } from "../controllers/goalController.js";

const router = express.Router();

router.post("/regiter", registerUser);

router.post("/:userId", login);

// router.post("/", createGoal);

// router.put("/:goalId", updateGoal);

// router.delete("/:goalId", deleteGoal);

export default router;
