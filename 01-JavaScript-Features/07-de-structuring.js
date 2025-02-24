const point = [100, 200, 300]

// const x = point[0]
// const y = point[1]

// De-Structuring in array
const [x, , y]= point

console.log( x, y)

const person = { name: "John", age: 25, isStudent: true}

// De-Structuring in object
const {name: anotherName, isStudent} = person
console.log(anotherName, isStudent)