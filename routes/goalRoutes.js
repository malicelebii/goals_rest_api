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

router.get("/goals", protect, getGoals);

router.get("/goals/:goalId", protect, getGoal);

router.post("/goals", protect, createGoal);

router.put("/goals/:goalId", protect, updateGoal);

router.delete("/goals/:goalId", protect, deleteGoal);

export default router;
