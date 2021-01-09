const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
// require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "images")));

// const uri = process.env.ATLAS_URI;
mongoose.connect(
  "mongodb+srv://Shreya:shreya@cluster0.4yhlx.mongodb.net/finalAsilverse?retryWrites=true&w=majority"
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongo DB success");
});

const userRouter = require("./routes/user");
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
