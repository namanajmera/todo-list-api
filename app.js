const express = require("express");
const fs = require('fs');
const app = express();
const port = 8080;

const data = fs.readFileSync('./data/todos.js','utf-8');
const todos = JSON.parse(data);

app.get('/todos', (req,res) => {
  res.status(200).json({
    message: "success",
    result: todos.length,
    data: todos
  })
}) 

app.use('/', (req,res) => {
  res.send('Hello From Todos.')
});

app.listen(port, () => {
  console.log(`Server is running on ${"http://localhost:" + port}`);
});
