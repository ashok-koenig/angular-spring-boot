console.log("Anything before class")
export default class User {
    constructor(private username: string, private password: string){
    }

    validate(): boolean{
        if(this.username=='admin' && this.password =='admin123'){
            return true;
        }else{
            return false
        }
    }
}

var user1 = new User("admin", "admin123")
console.log("Is valid user: ", user1.validate())

var user2 = new User("admin", "invalid")
console.log("Is valid user: ", user2.validate())