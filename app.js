const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "images")));

// const uri = process.env.ATLAS_URI;
mongoose.connect(
 process.env.MONGODB_URI );

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongo DB success");
});

const userRouter = require("./routes/user");
app.use("/users", userRouter);

if(process.env.NODE_ENV === 'production')
{
  app.use(express.static('client/build'))
}

app.listen(port, () => {
  console.log(`Your port is ${process.env.PORT}`);
});
