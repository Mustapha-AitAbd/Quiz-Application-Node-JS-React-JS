const mongoose = require("mongoose");

// definition d'un schèma
const questionSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: "unique",
      enum: ["multichoix", "unique", "bool"],
    },
    difficulte: {
      type: String,
      required: true,
      default: "facile",
      enum: ["facile", "moyenne", "difficile"],
    },
    bonreponse: {
      type: Array,
      required: true,
    },
    erroneerponse: {
      type: Array,
      required: true,
    }
  }
);

//créer et exporter un Modéle Post
module.exports = mongoose.model("Question", questionSchema);
