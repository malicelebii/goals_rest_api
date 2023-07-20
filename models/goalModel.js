import mongoose from "mongoose";

const Goal = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add text field"],
    },
  },
  { timestamps: true }
);

export default Goal;
