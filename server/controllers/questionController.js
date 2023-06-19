const Question = require("../models/QuestionModel");
function getQuestions(req, res) {
  // Get questions code
  Question.find({}, (err, questions) => {
    if (err) {
      res.status(400).json({ message: "Error", error: err });
    } else {
      res.status(200).json({ message: "Success", questions });
    }
  });
}
function addQuestion(req, res) {
  // Add question code
  const { question, type, difficulte, bonreponse, erroneerponse } = req.body;
  const bonT = bonreponse.split(",");
  const errT = erroneerponse.split(",");
  const newQuestion = new Question({
    question,
    type,
    difficulte,
    bonreponse: bonT,
    erroneerponse: errT,
  });
  newQuestion.save((err, quest) => {
    if (err) {
      res.status(400).json({ message: "Error", error: err });
    } else {
      res.status(200).json({ message: "Success", quest });
    }
  });
}
async function updateQuestion(req, res) {
  // Update question code
  const { question, type, difficulte, bonreponse, erroneerponse } = req.body;
  const newBonT = bonreponse.split(",");
  const newerrT = erroneerponse.split(",");
  await Question.findByIdAndUpdate(req.params.id, {
    question,
    type,
    difficulte,
    bonreponse: newBonT,
    erroneerponse: newerrT,
  });
  res.status(200).json({ message: "question updated" });
}
async function deleteQuestion(req, res) {
  // Delete question code
  await Question.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "question deleted" });
}

module.exports = { getQuestions, addQuestion, updateQuestion, deleteQuestion };
