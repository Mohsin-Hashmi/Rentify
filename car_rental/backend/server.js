import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js'; // Import your auth routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // Replace with your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json()); // Parse JSON request bodies

// MongoDB connection function
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("MongoDB connection error:", err);
  }
};

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the backend!");
});

// Use auth routes
app.use('/api/auth', authRoutes); // Add this line to use the auth routes

// Start the server and connect to MongoDB
app.listen(PORT, () => {
  connect();
  console.log(`Server running on port ${PORT}`);
});
