const express = require('express');
const router = express.Router();
const { getTodo, postTodo, getTodoById, completeTodo, deleteByTodo } = require('../controller/todoController');


router.route('/todos').get(getTodo);

router.route('/add-todo').post(postTodo);

router.route('/todo/:id').get(getTodoById);

router.route('/todo/:id').put(completeTodo);

router.route('/todo/:id').delete(deleteByTodo);

module.exports = router;