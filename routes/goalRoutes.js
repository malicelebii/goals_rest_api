import express from "express";

const router = express.Router();

router.get("/goals", async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

router.get("/goals/:goalId", async (req, res) => {
  res
    .status(200)
    .json({ message: "Get Goal by Id", goalId: req.params.goalId });
});

router.post("/goals", async (req, res) => {
  res.status(200).json({ message: "Create Goal" });
});

router.put("/goals/:goalId", async (req, res) => {
  res.status(200).json({ message: "Update Goal by Id" });
});

router.delete("/goals/:goalId", async (req, res) => {
  res.status(200).json({ message: "Delete a Goal by Id" });
});


export default router;