const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from server");
});
router.post("/gradepost", (req, res) => {
  const { name, email, marks } = req.body;
  if(!name || !email || !mark)
});
module.exports = router;
