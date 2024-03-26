const Todo = require("../models/todoModel");

exports.getTodo = async (req, res, next) => {
  const todos = await Todo.find();
  res.status(200).json({
    message: "success",
    result: todos.length,
    data: todos,
  });
};

exports.postTodo = async (req, res, next) => {
  const doc = await Todo.create(req.body);

  res.status(201).json({
    status: "success",
    message: "Todo add successfully",
    data: doc,
  });
};

exports.getTodoById = async (req, res, next) => {
  const id = req.params.id;
  const todo = await Todo.findById(id);
  res.status(200).json({
    status: "success",
    data: todo,
  });
};

exports.completeTodo = async (req, res, next) => {
  const id = req.params.id;
  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(404).json({
      status: "error",
      message: "Todo not found",
    });
  }
  todo.isComplete = true;
  await todo.save();
  res.status(200).json({
    status: "success",
    data: todo,
  });
};
