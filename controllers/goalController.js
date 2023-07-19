import asyncHandler from "express-async-handler";

export const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

export const getGoal = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: "Get Goal by Id", goalId: req.params.goalId });
});

export const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: "Create Goal" });
});

export const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update Goal by Id" });
});

export const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete a Goal by Id" });
});
