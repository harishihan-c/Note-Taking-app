import mongoose from "mongoose";

export const connectionDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://harishihan_db_user:3HOHoZ3X4dnh0BgT@cluster0.dnuxes9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Database Connected Successfully");
  } catch {
    console.error("Error to Connecting Database", error);
    process.exit(1);
  }
};
