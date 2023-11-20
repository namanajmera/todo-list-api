const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, "Please Provide the task"],
    },
    deadline: {
      type: Date,
      default: Date.now() + 10,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
