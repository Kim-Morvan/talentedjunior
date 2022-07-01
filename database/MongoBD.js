import { MongoClient } from "mongodb";
import dotenv from "dotenv"; dotenv.config();

let databaseConnetion;

const connectMongoClient = data => {
  MongoClient.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
      .then(client => {
        console.log("Connected to MongoDB Server")
      databaseConnetion = client.db()
      return data()
      })
      .catch(err => {
        console.error(err)
        return callback(err)
      })
}

const getMongoClient = () => {
  return databaseConnetion;
}

export { connectMongoClient, getMongoClient };
