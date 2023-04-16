const express = require("express");
const router = express.Router();
var Grades = require("./model/grade");
var adminuser = require("./model/admin.js");
router.use(express.json());

router.use(express.json());
router.get("/", async (req, res) => {
  res.send("hello from server");
});

router.post("/gradepost", async (req, res) => {
  const { name, email, subject, marks } = req.body;
  console.log(req.body);
  if (!name || !email || !subject || !marks) {
    res.status(400).json({ error: "Please fill in all the details" });
  }
  try {
    const subObj = {
      subject,
      marks,
    };
    const findEmail = await Grades.findOne({ email: email });
    if (findEmail) {
      if (
        findEmail.subject.filter((e) => {
          return e.subject == subject;
        }).length == 0
      ) {
        const updatedSubject = await Grades.findOneAndUpdate(
          { email: email },
          {
            $push: { subject: subObj },
          },
          { new: true }
        );
        if (updatedSubject) {
          res
            .status(200)
            .json({
              message: "Successfully updated the subject",
              updatedSubject,
            });
        } else {
          res.status(500).json({ message: "Error in updating subject" });
        }
      } else {
        res.status(400).json({ error: "Subject already exists for the email" });
      }
    } else {
      const arr = [subObj];
      const student = new Grades({
        name,
        email,
        subject: arr,
      });
      const stud = await student.save();
      if (stud) {
        res.status(201).json({ message: "Grade entry Successful" });
      } else {
        res.status(400).json({ error: "Grade Entry Failed" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});
//homeroute
router.get("/", (req, res) => {
  res.send("hello from server");
});

//for registering user
router.post("/register", async (req, res) => {
  const { name, email } = req.body;
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
      email,
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
});
router.post("/login", async (req, res) => {
  console.log(req.body);
});

module.exports = router;
