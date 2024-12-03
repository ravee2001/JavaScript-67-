const people = ["Aaron", "Mel", "John"];
const one = 1;
const str = "Hello World";
const b = true;
const employee = {
    firstName : "sirinya",
    lastName : "sawasdeeraksa",
};

function sayHello(person) {
    console.log("Hello " + person.firstName); //
}

console.log(typeof people); //เช็คtypeก่อน
console.log(typeof sayHello) //เช็คtypeก่อน
console.log(employee instanceof Array);
sayHello(employee);