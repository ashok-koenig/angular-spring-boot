"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Anything before class");
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    User.prototype.validate = function () {
        if (this.username == 'admin' && this.password == 'admin123') {
            return true;
        }
        else {
            return false;
        }
    };
    return User;
}());
exports.default = User;
var user1 = new User("admin", "admin123");
console.log("Is valid user: ", user1.validate());
var user2 = new User("admin", "invalid");
console.log("Is valid user: ", user2.validate());
