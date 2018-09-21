//npm imports
var express = require("express");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var request = require("request");
var bodyParser = require("body-parser");
var path = require("path");

//import models
var db = require("./models");

//initialize express
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//if deployed, use deployed port, otherwise use 3001
var PORT = process.env.PORT || 3001;

//if deployed, use the deployed database, otherwise use the local nytreact database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

//set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;
//connect to the Mongo DB
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

app.get("/api/articles", function(req, res) {

});

app.post("/api/articles", function(req, res) {

});

app.delete("/api/articles", function(req, res) {

});

app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
	console.log("App running on port: " + PORT);
});