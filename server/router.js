const express = require("express");
const router = express.Router();
var adminuser = require("./model/admin.js");

router.use(express.json());
//homeroute
router.get('/',(req,res)=>{
  res.send("hello from server")
});


//for registering user

router.post('/register',async(req,res)=>{


  const { name, email} = req.body;
  if (!name || !email) {
    res.status(400).json({ error: "fill all details" });
    console.log("None of the fields can be empty");
  }
  try {
    const userExists = await adminuser.findOne({ email });
    if (userExists) {
      res.status(400).json({ error: "User already exists" });
    }
    const user = new adminuser({
      name,
      email
    });
    const signUp = await user.save();
    if (signUp) {
      res.status(201).json({ message: "Registration Successful" });
    } else {
      res.status(400).json({ error: "Registration Failed" });
    }
  } catch (err) {
    console.log(err);
  }


})

router.post('/login',async(req,res)=>{
  console.log(req.body);
});
module.exports = router;


