import express from "express";
import { createGoal, deleteGoal, getGoal, getGoals, updateGoal } from "../controllers/goalController.js";

const router = express.Router();

router.get("/goals", getGoals);

router.get("/goals/:goalId", getGoal);

router.post("/goals", createGoal);

router.put("/goals/:goalId", updateGoal);

router.delete("/goals/:goalId", deleteGoal);

export default router;
