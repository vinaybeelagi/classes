// class User {
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){
//         console.log(this.name);
//     }
// }
// let user1 = new User("beelagi")
// user1.sayHi();

// class delcartion
class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  
  // class is a function
console.log(typeof User); // function
  
  // ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true
  
  // The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi); // the code of the sayHi method
  
  // there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi