import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URI;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const connectMongoClient = async () => {
  try {
    await mongoose.connect(uri, options);

    console.log("Connected to MongoDb");
  } catch (error) {
    console.error(`Error: ${error.message} `);
  }
};

export default connectMongoClient;
