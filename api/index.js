const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Routes
const conversationRoute = require("./routes/conversation");
const messageRoute = require("./routes/message");
const userRoute = require("./routes/user");


dotenv.config();

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
);

//middlewares
app.use(express.json());

app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

app.listen(8800, () => {
    console.log("Backend server is running!");
});