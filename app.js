const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const dotenv = require("dotenv");
dotenv.config();

const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "images")));

// const uri = process.env.ATLAS_URI;
mongoose.connect(
  // "mongodb+srv://shweta:shweta@cluster0.4lmtv.mongodb.net/ECure?retryWrites=true&w=majority"
  "mongodb+srv://Shreya:shreya1010@cluster0.4yhlx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongo DB success");
});

const userRouter = require("./routes/user");
app.use("/users", userRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(port, () => {
  console.log(`Your port is ${process.env.PORT}`);
});
