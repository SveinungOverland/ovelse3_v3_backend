"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    User.prototype.checkPassword = function (password) {
        return this.password == password;
    };
    return User;
}());
exports.default = User;
