import express from "express";
import dotenv from "dotenv";
import errorHandler from "./middlewares/errorHandler.js";
import goalRoutes from "./routes/goalRoutes.js";
import { connectDB } from "./config/db.js";
const port = process.env.PORT || 3000;
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use((err,req,res,next)=>{
//     console.log("asd");
// })
app.use("/api", goalRoutes);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port :${port}`));
