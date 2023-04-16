const express = require("express");
const router = express.Router();
var Grades = require("./model/grade");
var adminuser = require("./model/admin.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




router.use(express.json());



router.post("/gradepost", async (req, res) => {
  const { name, email, marks } = req.body;
  if (!name || !email || !marks) {
    res.status(400).json({ error: "Please fill in all the details" });
  }
  try {
    const userExists = await Grades.findOne({ email });
    if (userExists) {
      res.status(400).json({ error: "User already exists" });
    }
    const student = new Grades({
      name,
      email,
      marks,
    });
    const StudGrade = await student.save();
    if (StudGrade) {
      res.status(201).json({ message: "Grade post Successful" });
    } else {
      res.status(400).json({ error: "Not Successful" });
    }
  }
  catch (err) {
    console.log(err);
  }
});
//homeroute
router.get('/', (req, res) => {
  res.send("hello from server")
});


//for registering user

router.post('/register', async (req, res) => {

  const { name, email ,password,phone} = req.body;
  if (!name || !email||!password||!phone) {
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
      email,
      password,
      phone
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

router.post('/login', async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
      console.log(email);
      console.log(password);
      return res.status(400).json({ error: "None of the feilds can be empty" });
    }

    const emailExists = await adminuser.findOne({ email: email });
   
    if (emailExists) {
      const PassMatch = await bcrypt.compare(password, emailExists.password);

      const token = await emailExists.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      
      if (!PassMatch) {
        res.status(400).json({ error: "Please Enter valid User Credentials" });
      } else {
        res.json({ message: "User SignIn Successfully" });
      }
    } else {
      res.status(400).json({ error: "Please Enter valid User Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;


