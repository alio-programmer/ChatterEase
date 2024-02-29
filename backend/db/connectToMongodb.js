const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectToMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL).then(() => {
      console.log("DB connected successfully");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectToMongodb };
