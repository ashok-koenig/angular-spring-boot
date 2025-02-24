// creating function using 'function' keyword
function myFunctionName(){
    console.log("My Function is called")
}

// Calling a function
myFunctionName()
myFunctionName()

// Function with parameters
function greeting(name){
    console.log('Welcome '+ name)
}

// calling a function with input parameter
greeting("John")

// Function with parameter and return values
function sum(num1, num2){
    return num1 + num2
}

// Receive the return value and assign it to a varaible
let result = sum(10, 20)
console.log("Sum result is ", result)
console.log("Sum is ", sum(200, 300))

// Expression functions - introduced in ES5
const multiply = function(num1, num2){
    return num1 * num2
}

console.log("Multiplication of ", multiply(10, 5))

// Arrow functions - introduced in ES6

// const divid = (num1, num2) => {
//     return num1 / num2
// }

// If we have just a return statement, we can skip curly braces and return keyword
const divid = (num1, num2 ) => num1 / num2

console.log("Division result is ", divid(100, 5))