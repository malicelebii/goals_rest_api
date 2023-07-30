import express from "express";
import {
  createGoal,
  deleteGoal,
  getGoal,
  getGoals,
  updateGoal,
} from "../controllers/goalController.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", protect, getGoals);

router.get("/:goalId", protect, getGoal);

router.post("/", protect, createGoal);

router.put("/:goalId", protect, updateGoal);

router.delete("/:goalId", protect, deleteGoal);

export default router;
