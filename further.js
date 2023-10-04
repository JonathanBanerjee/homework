//Q1 -  Defensive check
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return "Bad input values";
  }
  return x + y;
}

console.log(add(59, 3));

//Q2 Timer (after 5 seconds)
//Runs in milliseconds
setTimeout(function () {
  console.log("This appears after 5 seconds!");
}, 5000);

// Q3 Timer (every 5 seconds)
var timer = setInterval(function () {
  console.log("I can count to five!");
}, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 5100);

//Q4-10 Scope

const firstVar = "I am in every function.";
function functionOne() {
  console.log(firstVar);
  function functionTwo() {
    let secondVar = "I'm only available for function two and function three.";
    console.log(secondVar);
    function functionThree() {
      let thirdVar = "I'm available in function three only.";
      console.log(thirdVar);
      fourthVar =
        "I'm also available in every function as I don't have a keyword assigned.";
      function innerScope() {
        innerVariable = "I can only be accessed when innerScope is called.";
        console.log(innerVariable);
      }
      innerScope();
    }
    functionThree();
  }
  functionTwo();
}
functionOne();

//Q11 Try catch me if you can (Finally)
try {
  let myAge = 28;
  console.log(myAge);
} catch (error) {
  console.log(error);
} finally {
  console.log("Run forrest run!");
}

//Q12 Duplicating the object
var obj = { myName: "Jonathan", age: 28, happy: true };

var deepClone = JSON.parse(JSON.stringify(obj));
obj.age = 29;
obj.myName = "Dave";

console.log(obj, deepClone);
