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
    required: true,
  },
});

const Grade = mongoose.model("grades", Grade);
modules.export = Grade;
