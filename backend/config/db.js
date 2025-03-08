import mongoose from "mongoose";

const uri = "mongodb+srv://mern:mern123@cluster0.rq2ew.mongodb.net/AICTE-ZOMATO-CLONE";

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};
