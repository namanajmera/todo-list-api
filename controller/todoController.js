const Todo = require("../models/todoModel");

const data = [
  {
    id: "1",
    todo_name: "Read Dune",
    isCompleted: "true",
    create_date: "2020-01-05",
  },
  {
    id: "2",
    todo_name: "Finish Foundation Trilogy",
    isCompleted: "true",
    create_date: "2020-02-10",
  },
  {
    id: "3",
    todo_name: "Explore The Expanse series",
    isCompleted: "false",
    create_date: "2020-03-15",
  },
  {
    id: "4",
    todo_name: "Read Neuromancer",
    isCompleted: "true",
    create_date: "2020-04-20",
  },
  {
    id: "5",
    todo_name: "Discover Ender's Game",
    isCompleted: "false",
    create_date: "2020-05-25",
  },
  {
    id: "6",
    todo_name: "Finish Hyperion Cantos",
    isCompleted: "false",
    create_date: "2020-06-30",
  },
  {
    id: "7",
    todo_name: "Explore The Martian",
    isCompleted: "true",
    create_date: "2020-07-04",
  },
  {
    id: "8",
    todo_name: "Read Snow Crash",
    isCompleted: "true",
    create_date: "2020-08-09",
  },
  {
    id: "9",
    todo_name: "Finish 1984",
    isCompleted: "false",
    create_date: "2020-09-14",
  },
  {
    id: "10",
    todo_name: "Discover The Hitchhiker's Guide to the Galaxy",
    isCompleted: "true",
    create_date: "2020-10-19",
  },
];

exports.getTodo = (req, res, next) => {
  res.status(200).json({
    message: "success",
    result: data.length,
    data: data,
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

exports.getTourById = (req,res,next) => {
    const id = req.params.id;
    const todo = data.filter((ele) => ele.id === id);
    res.status(200).json({
        status: "success",
        data: todo 
    })
}