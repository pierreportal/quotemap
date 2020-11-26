require("dotenv").config();

const express = require("express");

const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");

const mongoose = require("mongoose");
const logger = require("morgan");

const port = process.env.PORT;
mongoose
  .connect(
    // process.env.MONGODB_URI ||
    `mongodb+srv://pierreportal:${process.env.MONGO_PASS}@cluster0.fqblb.mongodb.net/quotemap?retryWrites=true&w=majority` ||
      "mongodb://localhost/quotemap",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((connection) =>
    console.log(`Connected to ${connection.connections[0].name}`)
  )
  .catch((err) => console.log("Error connection", err));

// const app_name = require("/.package.json").name;
const app = express();

app.use(logger("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieparser());

app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
});

const index = require("./routes/index");
app.use("/", index);

app.listen(port, () => console.log(`listening on ${port}`));

module.exports = app;
