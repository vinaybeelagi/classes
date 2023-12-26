class User {
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(this.name);
    }
}
let user1 = new User("beelagi")
user1.sayHi();