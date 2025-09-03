require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/db-connection");
const authRoutes = require("./routes/auth-routes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// DB connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("User service is running");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

// Graceful Shutdown Handling
const shutdownHandler = (signal) => {
  console.log(`Received ${signal}. Gracefully shutting down...`);

  mongoose.connection
    .close()
    .then(() => {
      console.log("✅ MongoDB connection closed.");
      process.exit(0);
    })
    .catch((err) => {
      console.error("❌ Error closing MongoDB connection:", err);
      process.exit(1);
    });
};

// Handle multiple termination signals
["SIGINT", "SIGTERM", "SIGHUP"].forEach((signal) => {
  process.on(signal, () => shutdownHandler(signal));
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
