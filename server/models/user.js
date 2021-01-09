const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  photo: {
    type: String,
    required: true,
  },

  praise: {
    type: Number,
    required: true,
    default: 0,
  },
  highFive: {
    type: Number,
    required: true,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
