const dotenv = require("dotenv").config({
  path: "./App/db/config/.env",
});
const User = require("./Models/User/User");
const uri = dotenv.parsed.MONGO_URI.toString();
const mongodb = require("mongodb").MongoClient;


const client = new mongodb(uri, { useUnifiedTopology: true });
client.connect((err) => {
  const collection = client.db("Math-Place").collection("Users");
  console.log("Database connected");
  client.close();
});
