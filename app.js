const express = require("express");

const app = express();
const port = 8080;

app.use("/", (req, res) => {
  res.send("Todo List");
});
app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
