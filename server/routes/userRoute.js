const router = require('express').Router()
const {addUser,updateUser,deleteUser} = require('../controllers/userController')
//Ajouter un nouvel utilisateur
router.post('/',addUser);
//Modifier un utilisateur
router.put('/:id',updateUser);
//Supprimer un utilisateur
router.delete('/:id',deleteUser);
module.exports = router;