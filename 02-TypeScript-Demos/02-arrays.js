"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixedMarks = exports.marks = void 0;
exports.marks = [90, 80, 89, 100];
// marks[1]= "fifty" // Cann't able to assign other data type values
exports.marks[1] = 89;
console.log(exports.marks);
exports.fixedMarks = [90, 80, 89, 100];
// fixedMarks[1]= 79 // Not possible, since its readonly array
console.log(exports.fixedMarks);
