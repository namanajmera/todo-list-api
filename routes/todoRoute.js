const express = require('express');
const router = express.Router();
const { getTodo, postTodo, getTourById } = require('../controller/todoController');


router.route('/todos').get(getTodo);

router.route('/add-todo').post(postTodo);

router.route('/todo/:id').get(getTourById);

module.exports = router;