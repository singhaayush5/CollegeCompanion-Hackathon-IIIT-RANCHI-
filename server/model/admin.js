const mongoose = require("mongoose");

//const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
 
});


const adminuser = mongoose.model("ADMINUSER", adminSchema);

module.exports = adminuser;
