const express = require('express')
const router = express.Router()

const controllers=require('../controllers/main')

router.get('/hello',controllers.welcome)
router.get('/data',controllers.remainder)


module.exports=router;
