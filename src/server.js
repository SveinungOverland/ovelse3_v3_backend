"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
// Project imports
// @ts-ignore
var routes_1 = require("./routes");
var db_1 = require("./db");
var server = express_1.default();
server.use(body_parser_1.default.json());
// @ts-ignore
var PORT = process.env.PORT || 5000;
// Initialize db
db_1.default.init();
server.use('/', routes_1.default);
server.listen(PORT, function () { return console.log("Listening on " + PORT); });
