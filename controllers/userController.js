import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error("Please fill the all fields");
  }

  const userExist = User.findOne({ email });

  if (userExist) {
    throw new Error("This email is already taken");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = {
    name,
    email,
    password: hashedPassword,
  };

  await User.create(newUser);

  res.json({ name, email });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("Please fill the all fields");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User cannot find");
  }

  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    throw new Error("Password is incorrect");
  }

  const accessToken = await jwt.sign(
    { id: user.id },
    process.env.JWT_PRIVATE_KEY,
    { expiresIn: "2days" }
  );

  res.json({ id: user.id, name: user.name, email, token: accessToken });
});
