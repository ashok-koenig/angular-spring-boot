let num1 = 100;
let num2 = 200;

if(num1 < num2){
    console.log(num2, " is greater")
}else if(num1> num2){
    console.log(num1, " is greater")
}else {
    console.log("Numbers are equal")
}

let weekDayNumber = 2
switch(weekDayNumber){
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    default:
        console.log("invalid week day number")
}