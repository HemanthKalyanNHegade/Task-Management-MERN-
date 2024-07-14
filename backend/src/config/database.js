// connect mongoose to the database and export the connection
const dotenv = require('dotenv');
const mongoose = require("mongoose");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log("Database connected");
  } catch (error) {
    console.error("Connection error", error);
  }
};

module.exports = connectDB;
