const mongoose = require("mongoose");

//const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
   
  }
 
 
});


const user = mongoose.model("USER", userSchema);

module.exports = user;
