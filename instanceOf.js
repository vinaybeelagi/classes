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