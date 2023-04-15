const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from server");
});
router.post("/gradepost", (req, res) => {
  const { name, email, marks } = req.body;
  if (!name || !email || !marks) {
    res.status(400).json({ error: "Please fill in all the details" });
  }
});
module.exports = router;
