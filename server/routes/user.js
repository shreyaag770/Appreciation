const router = require("express").Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
let User = require("../models/user");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

router.route("/add").post(upload.single("photo"), (req, res) => {
  const name = req.body.name;
  const praise = req.body.praise;
  const highFive = req.body.highFive;
  const photo = req.file.filename;

  const newUserData = {
    name,
    praise,
    highFive,
    photo,
  };

  const newUser = new User(newUserData);

  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/display", (req, res) => {
  User.find({}, function (err, img) {
    if (err) res.send(err);
    console.log(img);
    res.contentType("json");
    res.send(img);
  });
});

router.put("/highfive/:id", async (req, res) => {
  const userId = req.params.id;

  let user;
  try {
    user = await User.findById(userId);
    console.log(user);
  } catch (err) {
    console.log(err);
  }

  user.highFive = user.highFive + 1;

  try {
    await user.save();
    res.send("Success");
  } catch (err) {
    console.log(err);
  }
});

router.put("/praise/:id", async (req, res) => {
  const userId = req.params.id;

  let user;
  try {
    user = await User.findById(userId);
    console.log(user);
  } catch (err) {
    console.log(err);
  }

  user.praise = user.praise + 1;

  try {
    await user.save();
    res.json("Success");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
