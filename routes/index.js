require("dotenv").config();

const express = require("express");
const router = express.Router();
const Quote = require("../models/Quote");

const secretToken = process.env.SECRET;

router.get("/quotes", (req, res) => {
  return Quote.find({})
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

router.get("/random-quote", (req, res) => {
  return Quote.find({})
    .then((result) => res.json(result[~~(Math.random() * result.length)]))
    .catch((err) => console.log(err));
});

router.post("/add-quote", (req, res) => {
  const { quote, secretId } = req.body;

  if (secretId !== secretToken)
    return res.status(500).json("You don't have the right to add quotes.");

  return Quote.create({ quote }, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
