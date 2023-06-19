const Quiz = require("../models/QuizModel");
async function addQuiz(req, res) {
  // Add quiz code
  const { nom, questions, dateStart, dateEnd, etudiants } = req.body;
  const queT = questions.split(",");
  const etudT = etudiants.split(",");
  const quiz = new Quiz({
    nom,
    questions: queT,
    dateStart,
    dateEnd,
    etudiants: etudT,
  });
  await quiz.save();
  res.status(201).json({ message: "Success", quiz });
}
function getQuizs(req, res) {
  // Get quizs code
 Quiz.find({}, (err, quizs) => {
    if (err) {
      res.status(400).json({ message: "Error", error: err });
    } else {
      res.status(200).json({ message: "Success", quizs });
    }
  });
}
async function updateQuiz(req, res) {
  // Update quiz code
  const { nom, questions, dateStart, dateEnd, etudiants } = req.body;
  const queT = questions.split(",");
  const etudT = etudiants.split(",");
  await Quiz.findByIdAndUpdate(req.params.id, {
    nom,
    questions: queT,
    dateStart,
    dateEnd,
    etudiants: etudT,
  });
  res.status(200).json({ message: "quiz updated" });
}
async function deleteQuiz(req, res) {
  // Delete quiz code
  await Quiz.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "quiz deleted" });
}
module.exports = { addQuiz, getQuizs, updateQuiz, deleteQuiz };
