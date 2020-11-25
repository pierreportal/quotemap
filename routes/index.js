const express = require("express");
const router = express.Router();
const Quote = require("../models/Quote");

router.get("/quotes", (req, res) => {
  return Quote.find({})
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

router.post("add-quote", (req, res) => {
  const { quote } = req.body;
  console.log("quote: ", quote);
  Quote.create({ quote }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
  return;
});

module.exports = router;
