const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(`MongoDb connected @ ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
