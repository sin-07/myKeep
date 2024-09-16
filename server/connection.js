const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  if (connection) {
    console.log("Database connected successfully");
  } else {
    console.log("database connection failed");
  }
};

module.exports = connectDb;
