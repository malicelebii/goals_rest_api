import asyncHandler from "express-async-handler";
import Goal from "../models/goalModel.js";

export const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).json(goals);
});

export const getGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.goalId);

  res.status(200).json(goal);
});

export const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const { text } = req.body;

  const newGoal = await Goal.create({ text, user: req.user });

  res.status(201).json(newGoal);
});

export const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.goalId);

  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const { text } = req.body;

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("You have no such this goal");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.goalId, { text });

  if (!updatedGoal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  res.status(200).json(text);
});

export const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.goalId);

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("You have no such this goal");
  }

  const deletedGoal = await Goal.findByIdAndRemove(req.params.goalId);
  
  res.status(200).json(deletedGoal);
});
