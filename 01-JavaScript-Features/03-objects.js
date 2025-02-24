const person = { name: "John", age: 25, isStudent: true}

console.log(person)

// Access values - using dot notation
console.log("Name: ", person.name)

// Access value - using bracket notation
console.log("Age: ", person['age'] )
// Modify value - using dot notation
person.age = 26
// Modify value - using bracket notation 
person['isStudent'] = false

// Display modified values
console.log(person)
