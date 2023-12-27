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