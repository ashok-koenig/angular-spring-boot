import { marks } from "./02-arrays";
import { displayDetails } from "./03-functions";
import User from "./04-classes";

console.log(marks)

displayDetails("John", "Smith", 22)

var user = new User("admin", "admin123")
console.log("Is valid user: ", user.validate())