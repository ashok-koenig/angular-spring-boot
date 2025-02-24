const sumUp = (initialValue, ...values) =>{
    let result = initialValue;
    for(let value of values){
        result +=value
    }
    console.log("Result is", result)
}

sumUp(10)
sumUp(10, 20, 30)
sumUp(1, 2, 3, 4, 5, 5)
