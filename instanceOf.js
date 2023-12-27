// The instanceof operator
 //Syntax
//  obj instanceof Class

// class Rabbit{}
// let rabbit = new Rabbit();
// console.log(rabbit instanceof Rabbit);

// //  works with constructor functions:
// function Rabbit() {}
// console.log(new Rabbit() instanceof Rabbit);

// //  built-in classes like Array
// let arr = [1,2,3];
// console.log(arr instanceof Array);
// console.log(arr instanceof Object);

//Bonus: Object.prototype.toString for the type
let obj = {};

console.log(obj); // [object Object]
console.log(obj.toString()); // the same

// task-Strange instanceof
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true

/* ANS :instanceof does not care about the function, but rather about its prototype, that it matches against the prototype chain.
And here a.__proto__ == B.prototype, so instanceof returns true.
So, by the logic of instanceof, the prototype actually defines the type, not the constructor function.*/