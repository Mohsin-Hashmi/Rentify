import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js"; // Import your auth routes
import rentalCarRouter from "./routes/rentalCar.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "http://localhost:3000" /**Frontend origin */,
    methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/", authRoutes);
app.use("/", rentalCarRouter);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("MongoDB connection error:", err);
  }
};

// Start the server and connect to MongoDB
app.listen(PORT, () => {
  connect();
  console.log(`Server running on port ${PORT}`);
});
