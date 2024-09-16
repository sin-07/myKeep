const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const connectDb = require("./connection");
const Todo = require("./models/model");
const { get } = require("mongoose");

connectDb();

app.use(cors());
app.use(express.json());

app.post("/post-todo", async (req, res) => {
  const { title, description } = req.body;
  let todo = new Todo({
    title,
    description,
  });
  await todo.save();
  res.status(200).json({ message: "Todo saved successfully", todo });
});

app.get("/get-todos", async (req, res) => {
  let todo = await Todo.find();
  if (!todo) {
    res.status(400).json({ message: "No todos found" });
  } else {
    res.status(200).json({ todo });
  }
});

app.delete("/delete-todo/:id", async (req, res) => {
  let todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo) {
    res.status(400).json({ message: "No todo found" });
  } else {
    res.status(200).json({ message: "Todo deleted successfully" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
