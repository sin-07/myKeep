const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  if (connection) {
    console.log("Connected to MongoDB");
  } else {
    console.log("Error in connecting to MongoDB");
  }
};

module.exports = connectDb;