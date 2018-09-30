"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// Project imports
var userRoutes = require("./routes/users");
var server = express();
server.use(bodyParser.json);
// @ts-ignore
var PORT = process.env.PORT || 5000;
// @ts-ignore
var URI = process.env.MONGODB_URI;
// Initialize db
mongoose.connect(URI, { useNewUrlParser: true })
    .then(function (db) { return console.log("Database connected"); })
    .catch(function (err) { return console.log("Connection error: " + err); });
server.use('/user', userRoutes);
server.listen(PORT, function () { return console.log("Listening on " + PORT); });
