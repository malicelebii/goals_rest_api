import express from "express";
import dotenv from "dotenv";
import goalRoutes from "./routes/goalRoutes.js";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", goalRoutes);

app.listen(port, () => console.log(`Server started on port :${port}`));
