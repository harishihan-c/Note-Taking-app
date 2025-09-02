import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Database Connected Successfully");
  } catch {
    console.error.message("Error to Connecting Database", error.message);
    process.exit(1);
  }
};
