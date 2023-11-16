const express = require("express");
const app = express();
const port = 8080;
const todoRouter = require('./routes/todoRoute');

app.use(express.json());

app.use(todoRouter);

app.use('/', (req,res) => {
  res.send('Hello From Todos.')
});

app.listen(port, () => {
  console.log(`Server is running on ${"http://localhost:" + port}`);
});
