import express from "express";
import noteRoutes from "./routes/noteRoutes.js";

const app = express();

app.use("/api/notes", noteRoutes);

app.listen(5001, () => {
  console.log("Server Started on Port: 5001");
});


//mongodb+srv://harishihan_db_user:3HOHoZ3X4dnh0BgT@cluster0.dnuxes9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0