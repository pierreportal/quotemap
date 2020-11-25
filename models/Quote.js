const mongoose = require("mongoose");
const { Schema } = mongoose;

const quoteTemplate = {
  quote: {
    type: String,
    required: true,
  },
  //   createdAt: {
  //     type: Date,
  //     required: true,
  //   },
};

const Quote = mongoose.model("quote", new Schema(quoteTemplate));

module.exports = Quote;
