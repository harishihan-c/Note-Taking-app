import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/config.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;



//Middleware
app.use(express.json());

app.use("/api/notes", noteRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
  console.log("Server Started on Port:", PORT);
});
});


