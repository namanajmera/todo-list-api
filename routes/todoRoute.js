const express = require('express');
const router = express.Router();
const { getTodo } = require('../controller/todoController');


router.route('/todos').get(getTodo);


module.exports = router;