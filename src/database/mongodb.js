import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.NEXT_PUBLIC_DATABASE_URI;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const connectMongoClient = () => {
  try {
    mongoose.connect(uri, options);

    mongoose.connection.on("open", () => {
      console.log("Connected to MongoDb");
    });

    mongoose.connection.on("error", (error) => {
      console.log("MongoDb connection error" + error);
      process.exit();
    });
  } catch (error) {
    console.error(`Error: ${error.message} `);
  }
};

export default connectMongoClient;
