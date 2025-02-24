const array1 = [1,2,3]
const array2 = [4,5,6]

// const array3 = array1

// clone / copy of a array into another array 
const array3 = [...array1]

array1[0]=10

console.log(array1, array3)

// Merge two array to form a new array
const array4 = [...array1, ...array2]
console.log(array4)