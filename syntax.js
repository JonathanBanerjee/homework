//Declaring variables
var firstname = "Jonathan";
var surname = "Banerjee";
var num = 28;
var bool = true;

//Adding two numbers
var numOne = 23;
var numTwo = 3;

console.log(numOne + numTwo);

// Concatenating two strings
console.log(firstname.concat(surname));

//If statement

if (numOne === numTwo) {
  console.log("The numbers match chief and the data types match too.");
} else if (num !== numTwo) {
  console.log("These numbers do not match");
}

//Switch statement
switch (true) {
  case numOne === numTwo && typeof numOne === typeof numTwo:
    console.log("The numbers match chief and the data types match too.");
    break;
  case numOne !== numTwo:
    console.log("These numbers do not match");
    break;
}

//Object
var Person = {
  firstname: "Jonathan",
  age: 28,
  height: 189,
};

for (i = 0; i < 10; i++) {
  console.log("I love the Jump");
}
