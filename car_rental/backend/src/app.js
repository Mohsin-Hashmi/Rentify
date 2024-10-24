const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const app = express();
// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // For form data

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://mohsin-dev:12345@car-rental-db.4horf.mongodb.net/",
    
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Schema and Model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  showPassword: String,
});

const User = mongoose.model("User", userSchema);

// POST /register route
app.post("/register", async (req, res) => {
  console.log("Request Body:", req.body); // Debug the incoming body
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ error: "Email and Password are required" });
    }
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
    console.log("I am waiting for response");
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// POST /login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the provided password matches the one in the database
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Serve React's build folder
const static_path = path.join(__dirname, "../../frontend/build");
app.use(express.static(static_path));

// Route all other requests to React's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(static_path, "index.html"));
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
