// The instanceof operator
 //Syntax
//  obj instanceof Class

class Rabbit{}
let rabbit = new Rabbit();
console.log(rabbit instanceof Rabbit);

//  works with constructor functions:
function Rabbit() {}
console.log(new Rabbit() instanceof Rabbit);