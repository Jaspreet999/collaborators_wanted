const express = require('express')

const feedController = require('../controllers/feedController')
const router = express.Router()

router.get('/getUser',feedController.get_feed)
router.put('/update',feedController.update_feed)
router.post('/create',feedController.create_feed)
router.get('/delete',feedController.delete_feed)

module.exports = router