const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Restaurant POS Backend Running");
});

// Port
const PORT = process.env.PORT || 5001;

// Start Server
app.listen(PORT, () => {
  console.log(`Restaurant POS Server running on port ${PORT}`);
});