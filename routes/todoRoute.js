const express = require('express');
const router = express.Router();
const { getTodo, postTodo } = require('../controller/todoController');


router.route('/todos').get(getTodo);

router.route('/add-todo').post(postTodo);

module.exports = router;