const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
);

app.listen(8800, () => {
    console.log("Backend server is running!");
});