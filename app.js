const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const port = process.env.PORT;
const todoRouter = require("./routes/todoRoute");
const morgan = require('morgan');

// Get the  Mongo DB URL Connection String
const DB = process.env.DATABASE;

// Now make a connection to DB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log(`Connected To ${process.env.DATABASE} Successfully`));

app.use(morgan('dev'));
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use("/todos", todoRouter);

app.use("/", (req, res) => {
  res.send("Hello From Todos.");
});

app.listen(port, () => {
  console.log(`Server is running on ${"http://localhost:" + port}`);
});
