const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const taskRoutes = require("./routes/taskRoutes");

const app = express();

// 1. Better CORS configuration (Optional but safer)
app.use(cors()); 
app.use(express.json());

// 2. Updated Mongoose connection (Removes deprecation warnings)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Stop the server if DB fails
  });

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("Backend Running Successfully on AWS!");
});

// 3. IMPORTANT: Bind to 0.0.0.0 for AWS ALB/EC2
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server is globally accessible on port ${PORT}`);
});