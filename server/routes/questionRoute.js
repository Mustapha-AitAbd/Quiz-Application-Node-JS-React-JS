const router = require('express').Router()
const {getQuestions,addQuestion,updateQuestion,deleteQuestion} = require('../controllers/questionController')
//get all questions created by a teacher
router.get('/',getQuestions);
//Créer une nouvelle question
router.post('/',addQuestion);
//Modifier une question
router.put('/:id',updateQuestion);
//Supprimer une question
router.delete('/:id',deleteQuestion);
module.exports = router;