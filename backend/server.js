const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

// Only ONE connect call — clean and warning-free
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ DB connected");
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  })
  .catch((err) => console.error("❌ DB connection error:", err));
