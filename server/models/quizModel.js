const mongoose = require("mongoose");
const quizSchema = mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  dateStart: {
    type: String,
    required: true,
  },
  dateEnd: {
    type: String,
    required: true,
  },
  etudiants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});
module.exports = mongoose.model("Quiz", quizSchema);
