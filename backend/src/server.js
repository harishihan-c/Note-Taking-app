import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/config.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  console.log("Server Started on Port:", PORT);
});
