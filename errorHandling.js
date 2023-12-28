// The “try…catch” syntax
// try {
//         //code...
// }
// catch(err) {
// //error message
// }

// // JSON.parse of try..catch.
// let json = '{"name":"john","age":30}';
// let user = JSON.parse(json);
// console.log(user.name);
// console.log(user.age);

// // task-Finally or just the code?
// function f() {
//     try {
//         console.log('start');
//       return "result";
//     } catch (err) {
//       /// ...
//     } finally {
//         console.log('cleanup!');
//     }
//   }
  
//   f(); // cleanup!

//   //when there’s a throw, like here:
//   function f() {
//     try {
//         console.log('start');
//       throw new Error("an error");
//     } catch (err) {
//       // ...
//       if("can't handle the error") {
//         throw err;
//       }
  
//     } finally {
//         console.log('cleanup!')
//     }
//   }
  
//   f(); // cleanup!

  // example-1
  function divideNumbers(a, b) {
    try {
      if (b === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return a / b;
    } catch (error) {
      console.error("Error caught:", error.message);
      // You can choose to handle the error or rethrow it
      throw error; // Rethrowing the same error
    } finally {
      console.log("Division operation completed."); // This will always execute
    }
  }
  
  // Example usage:
  try {
    let result = divideNumbers(10, 2);
    console.log("Result:", result);
    
    result = divideNumbers(8, 0); // This will throw an error
    console.log("Result:", result); // This line won't be reached due to the error
  } catch (outerError) {
    console.error("Outer catch block:", outerError.message);
  } finally {
    console.log("All operations completed."); // This will always execute
  }
  

  // topic:custom errors-task-Inherit from SyntaxError
class FormatError extends SyntaxError{
constructor(message) {
  super(message);
  this.name = this.constructor.name;
}
}
  let err = new FormatError("formatting error");
console.log( err.message ); // formatting error
console.log( err.name ); // FormatError
console.log( err.stack ); // stack

console.log( err instanceof FormatError ); // true
console.log( err instanceof SyntaxError ); // true (because inherits from SyntaxError)