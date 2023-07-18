export const getGoals = async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

export const getGoal = async (req, res) => {
  res
    .status(200)
    .json({ message: "Get Goal by Id", goalId: req.params.goalId });
};

export const createGoal = async (req, res) => {
  res.status(200).json({ message: "Create Goal" });
};

export const updateGoal = async (req, res) => {
  res.status(200).json({ message: "Update Goal by Id" });
};

export const deleteGoal = async (req, res) => {
  res.status(200).json({ message: "Delete a Goal by Id" });
};
