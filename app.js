const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const port = process.env.PORT;
const todoRouter = require("./routes/todoRoute");

// Get the  Mongo DB URL Connection String
const DB = process.env.DATABASE;

// Now make a connection to DB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log(`Connected To ${process.env.DATABASE} Successfully`));

app.use(express.json());

app.use(todoRouter);

app.use("/", (req, res) => {
  res.send("Hello From Todos.");
});

app.listen(port, () => {
  console.log(`Server is running on ${"http://localhost:" + port}`);
});
