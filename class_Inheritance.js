// // task-class-inheritance
// class Animal {

//     constructor(name) {
//       this.name = name;
//     }
  
//   }
  
//   class Rabbit extends Animal {
//     constructor(name) {
//       super(name)
//       this.created = Date.now();
//     }
//   }
  
//   let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
// console.log(rabbit.name);

// //task-Extended clock
// class ExtendedClock extends Clock {
//     constructor(options) {
//       super(options);
//       let { precision = 1000 } = options;
//       this.precision = precision;
//     }
  
//     start() {
//       this.render();
//       this.timer = setInterval(() => this.render(), this.precision);
//     }
//   };

//   static inheritance and mehtods
// In a class declaration, they are prepended by static keyword, like this:
class User{
    static staticMethod() {
        console.log(this === User)
    }
}
User.staticMethod();

// That actually does the same as assigning it as a property directly:
class User1 { }
    User1.staticMethod = function() {
        console.log(this === User1)
    }
User1.staticMethod();

// Usually, static methods are used to implement functions that belong to the class as a whole, but not to any particular object of it.
// For instance, we have Article objects and need a function to compare them.
// A natural solution would be to add Article.compare static method:
class Article {
    constructor(title,date){
        this.title = title;
        this.date = date;
    }
    static compare(articleA,articleB){
        return articleA.date-articleB.date;
    }
}
let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
  ];
  articles.sort(Article.compare);
  console.log(articles[0].title);

//   task-Class extends Object?
class Rabbit extends Object {
    constructor(name) {
      super(); // need to call the parent constructor when inheriting
      this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Rab");
  
  console.log( rabbit.hasOwnProperty('name') ); // true

// Internal and external interface
class CoffeMachine {
    waterAmount = 0;

    constructor(power) {
        this.power = power;
        console.log(`coffe m/c power:${power}`);
    }
}
let coffeMachine = new CoffeMachine(100);
coffeMachine.waterAmount = 200;

// Protected properties are usually prefixed with an underscore _.
class CoffeeMachine {
    _waterAmount = 0;
  
    set waterAmount(value) {
      if (value < 0) {
        value = 0;
      }
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }
  
    constructor(power) {
      this._power = power;
    }
  
  }
  
  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);
  
  // add water
  coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10

  