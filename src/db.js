"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var DB = /** @class */ (function () {
    function DB() {
    }
    DB.init = function () {
        // @ts-ignore
        mongoose_1.default.connect(process.env.MONGODB_URI)
            .then(function (db) { return console.log("Connected to db", db); })
            .catch(function (err) { return console.error("Connection error: " + err); });
        this.initialized = true;
    };
    DB.getConnection = function () {
        if (this.initialized) {
            var connection = mongoose_1.default.getConnection();
            console.log(typeof connection);
            return connection;
        }
        else
            return null;
    };
    DB.initialized = false;
    return DB;
}());
exports.default = DB;
