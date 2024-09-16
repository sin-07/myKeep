const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const connectDb = require("./connection");
const Todo = require("./models/model");

connectDb();

app.use(express.json());
app.use(cors());

app.post("/post-todo", async (req, res) => {
  let todo = new Todo({
    title: req.body.title,
    description: req.body.description,
  });
  await todo.save();
  res.status(200).json({ message: "Todo added successfully", todo });
});

app.get("/get-todos", async (req, res) => {
  let todos = await Todo.find();

  if (!todos) {
    res.status(400).json({ message: "No todos found" });
  }
  res.status(200).json({ todos });
});

app.delete("/delete-todo/:id", async (req, res) => {
  let todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo) {
    res.status(400).json({ message: "Todo not found" });
  }
  res.status(200).json({ message: "Todo deleted successfully", todo });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
