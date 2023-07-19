import express from "express";
import dotenv from "dotenv";
import errorHandler from "./middlewares/errorHandler.js";
import goalRoutes from "./routes/goalRoutes.js";
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use((err,req,res,next)=>{
//     console.log("asd");
// })
app.use("/api", goalRoutes);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port :${port}`));
