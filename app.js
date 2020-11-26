require("dotenv").config();

const express = require("express");

const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");

const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const port = process.env.PORT;
const MONGO_PASS = process.env.MONGO_PASS;

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/quotemap", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connection) =>
    console.log(`Connected to ${connection.connections[0].name}`)
  )
  .catch((err) => console.log("Error connection", err));

const app = express();

app.use(logger("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieparser());

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build"));
});

const index = require("./routes/index");
app.use("/", index);

app.listen(port, () => console.log(`listening on ${port}`));

module.exports = app;
