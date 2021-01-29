var UserModel = require("../Models/User/User")
var mongodb = require("mongodb").MongoClient;
var path = require("path")
var dotenv = require("dotenv").config({
	path: path.join(__dirname, "../.env"),
});

var uri = dotenv.parsed.MONGO_URI.toString();

function connect() {
	const client = new mongodb(uri, { useUnifiedTopology: true });
	client.connect((err) => {
		const collection = client.db("Math-Place").collection("Users");
		console.log("Database connected");
		client.close();
	});
}

module.exports = { connect: connect }
