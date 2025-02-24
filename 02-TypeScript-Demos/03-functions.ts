export const displayDetails = (firstName: string, lastName: string, age: number): void =>{
    // console.log(firstName, lastName, " age is ", age)
    // Back tick representation to string
    let message = `Hello, 
                    ${firstName} ${lastName} 
                    age is ${age}`
    console.log(message)
}

displayDetails("John", "Peter", 20)
