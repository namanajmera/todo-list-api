const express = require('express');
const router = express.Router();
const { getTodo, postTodo, getTodoById, completeTodo } = require('../controller/todoController');


router.route('/todos').get(getTodo);

router.route('/add-todo').post(postTodo);

router.route('/todo/:id').get(getTodoById);

router.route('/todo/:id').put(completeTodo);

module.exports = router;