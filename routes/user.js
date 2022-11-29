const express = require('express')

const userController = require('../controllers/userController')

const router = express.Router()

router.get('/getUser',userController.get_user)
router.put('/update',userController.update_user)
router.post('/create',userController.create_user)
router.get('/delete',userController.delete_user)

module.exports = router