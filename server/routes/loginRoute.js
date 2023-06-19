const router = require('express').Router()
const {loginUser} = require('../controllers/userController')
//loginUser
router.post('/',loginUser)

//exports router
module.exports = router