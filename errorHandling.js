// The “try…catch” syntax
try {
        //code...
}
catch(err) {
//error message
}

// JSON.parse of try..catch.
let json = '{"name":"john","age":30}';
let user = JSON.parse(json);
console.log(user.name);
console.log(user.age);

// task-Finally or just the code?
function f() {
    try {
        console.log('start');
      return "result";
    } catch (err) {
      /// ...
    } finally {
        console.log('cleanup!');
    }
  }
  
  f(); // cleanup!

  //when there’s a throw, like here:
  function f() {
    try {
        console.log('start');
      throw new Error("an error");
    } catch (err) {
      // ...
      if("can't handle the error") {
        throw err;
      }
  
    } finally {
        console.log('cleanup!')
    }
  }
  
  f(); // cleanup!