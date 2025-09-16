import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/config.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

//Middleware
app.use(express.json());
if(process.env.NODE_ENV !== "production"){
  app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
}
app.use("/api/notes", noteRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server Started on Port:", PORT);
  });
});
