const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  const wes = { name: "Wes", age: 100, cool: true };
  // res.send("Hey! It works!");
  // res.json(wes);
  res.send(req.query);
});

module.exports = router;
