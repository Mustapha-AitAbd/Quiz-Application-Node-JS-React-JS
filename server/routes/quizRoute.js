const router = require('express').Router()
const {getQuizs,addQuiz,updateQuiz,deleteQuiz} = require('../controllers/quizController')
//Récupérer la liste des quiz auxquels l’utilisateur est
//invité ou l’utilisateur est l’auteur.
router.get('/',getQuizs);
//Créer un nouveau quiz
router.post('/',addQuiz);
//Modifier un quiz
router.put('/:id',updateQuiz);
//Supprimer un quiz
router.delete('/:id',deleteQuiz);
module.exports = router;