const express = require('express');
const controllers = require('../controllers/todo');
const router = express.Router();

router.post('/post',controllers.add);
router.get('/',controllers.get);
router.delete('/',controllers.delete);
router.put('/',controllers.update);
router.patch('/',controllers.updateList);

module.exports = router; 