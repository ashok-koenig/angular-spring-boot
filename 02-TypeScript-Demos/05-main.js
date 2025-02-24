"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_arrays_1 = require("./02-arrays");
var _03_functions_1 = require("./03-functions");
var _04_classes_1 = require("./04-classes");
console.log(_02_arrays_1.marks);
(0, _03_functions_1.displayDetails)("John", "Smith", 22);
var user = new _04_classes_1.default("admin", "admin123");
console.log("Is valid user: ", user.validate());
