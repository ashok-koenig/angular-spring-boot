export var marks: number[] = [90,80,89,100]

// marks[1]= "fifty" // Cann't able to assign other data type values

marks[1] = 89
console.log(marks)

var fixedMarks: readonly number[] =  [90,80,89,100]

// fixedMarks[1]= 79 // Not possible, since its readonly array
console.log(fixedMarks)