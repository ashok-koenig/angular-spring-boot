"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayDetails = void 0;
var displayDetails = function (firstName, lastName, age) {
    // console.log(firstName, lastName, " age is ", age)
    // Back tick representation to string
    var message = "Hello, \n                    ".concat(firstName, " ").concat(lastName, " \n                    age is ").concat(age);
    console.log(message);
};
exports.displayDetails = displayDetails;
(0, exports.displayDetails)("John", "Peter", 20);
