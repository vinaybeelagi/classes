// // class User {
// //     constructor(name){
// //         this.name = name;
// //     }
// //     sayHi(){
// //         console.log(this.name);
// //     }
// // }
// // let user1 = new User("beelagi")
// // user1.sayHi();

// // class declaration
// class User {
//     constructor(name) { this.name = name; }
//     sayHi() { alert(this.name); }
//   }
  
//   // class is a function
// console.log(typeof User); // function
  
//   // ...or, more precisely, the constructor method
// console.log(User === User.prototype.constructor); // true
  
//   // The methods are in User.prototype, e.g:
// console.log(User.prototype.sayHi); // the code of the sayHi method
  
//   // there are exactly two methods in the prototype
// console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// // Class Expression
// let user2 = class {
//     sayHi(){
//     console.log("hello")
//     }
// }

// function makeClass(phrase) {
//     return class {
//         sayHi() {
//             console.log(phrase)
//         }
//     };
// }
// let User4 = makeClass("hello");
// new User4().sayHi();

// task-Rewrite to class
class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
  clock.stop();
  