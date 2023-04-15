const mongoose = require("mongoose");

var Grade = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  marks: {
    type: Number,
    required: true,
  },
});

const Grades = mongoose.model("grades", Grade);
module.exports = Grades;
