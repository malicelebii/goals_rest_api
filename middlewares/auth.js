import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const protect = asyncHandler(async (req, res, next) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    const payload =  jwt.verify(token, process.env.JWT_PRIVATE_KEY);

    req.user = await User.findById(payload.id).select('-password')
    console.log(req.user)
    next();
  } catch (error) {
    res.status(401);
    throw new Error('Not authorized')
  }


  if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token  ')
  }
});
