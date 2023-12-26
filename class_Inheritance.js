// task-class-inheritance
class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      super(name)
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
console.log(rabbit.name);

//task-Extended clock
class ExtendedClock extends Clock {
    constructor(options) {
      super(options);
      let { precision = 1000 } = options;
      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  };