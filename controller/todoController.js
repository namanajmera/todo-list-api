const data = [
  {
    task: "Convince the office plants to photosynthesize faster",
    priority: "High",
    deadline: "2023-11-30",
  },
  {
    task: "Teach the coffee machine to make espresso with a perfect crema",
    priority: "Medium",
    deadline: "2023-12-05",
  },
  {
    task: "Attend a meeting with the imaginary friend committee",
    priority: "Low",
    deadline: "2023-12-10",
  },
  {
    task: "Practice synchronized chair spinning for the annual office chair Olympics",
    priority: "High",
    deadline: "2023-11-25",
  },
  {
    task: "Conquer the inbox dragon - reply to all emails with dragon-related GIFs",
    priority: "Medium",
    deadline: "2023-11-28",
  },
  {
    task: "Develop a groundbreaking theory on why pens always disappear",
    priority: "High",
    deadline: "2023-12-15",
  },
  {
    task: "Organize a staring contest with the office fish. Blinking is not allowed",
    priority: "Low",
    deadline: "2023-12-03",
  },
  {
    task: "Find out who stole all the staplers and organize a stapler amnesty program",
    priority: "Medium",
    deadline: "2023-12-08",
  },
  {
    task: "Master the art of desk origami, starting with the elusive paperclip swan",
    priority: "High",
    deadline: "2023-11-27",
  },
];

exports.getTodo = (req, res, next) => {
  res.status(200).json({
    message: "success",
    result: data.length,
    data: data,
  });
};

exports.postTodo = (req, res, next) => {
    console.log(req.body);
  res.status(201).json({
    status: "success",
    message: "Todo add successfully",
  });
};
