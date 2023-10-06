//Q2-3 Addition function to be exported
export const add = (x, y) => {
  return x + y;
};

//Q2-3 Object to be exported.
export const person = { firstName: "Jonathan", age: 28, club: "Watford" };

//Q2-3 Variable to be exported
export const myAge = 28;

//Q4 exporting the default function.
export default function (x, y) {
  return x - y;
}

//Q6 Default parameters
const defPam = (x = 30, y = 3, z = 0) => {
  return x + y + z;
};
console.log(add(2, 2));

//Q7 Template Literal String
const litString = `His name is ${person.firstName}, his age is ${person.age}, and his favorite football club is ${person.club}`;
console.log(litString);

//Q8 Trim
const spaceString = "   I am no longer in space  ";
console.log(spaceString.trim());

//Q9 A function to create an object
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const person1 = new Person("Jonathan", "Banerjee", 28);
console.log(person1.age);

//Q10 Constructor function
function Player(fullName, position) {
  this.fullName = fullName;
  this.position = position;
}

//Q11 Creating an instance of the function
const player1 = new Player("Troy Deeney", "Striker");
console.log(player1);

//Q12 Extending the prototype with a new function
Player.prototype.getTeam = function () {
  console.log(
    this.fullName + " plays as a " + this.position + " for Birmingham"
  );
};

console.log(player1.getTeam());

//Q13 Create an object with a method
const driver = {
  firstName: "Lewis",
  lastName: "Hamilton",
  car: "Mercedes",
  fullName: function () {
    return this.firstName + " " + this.lastName + " drives a " + this.car;
  },
};
console.log(driver.fullName());

//Q14 Call, Apply & Bind

const updatedObj = {
  firstName: "Morgan",
  lastName: "Freeman",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Call
console.log(
  updatedObj.fullName.call({ firstName: "Bob", lastName: "Odenkirk" })
);

// Function to list all the names in the array of objects.
const data = [
  { firstName: "Peter", lastName: "Pan" },
  { firstName: "Peter", lastName: "Jones" },
  { firstName: "Patricia", lastName: "Smith" },
];

data.forEach(function (item) {
  console.log(updatedObj.fullName.call(item)); // Use updatedObj instead of obj2
});

// Apply
data.forEach(function (item) {
  console.log(updatedObj.fullName.apply(item)); // Use updatedObj instead of obj2
});

// Bind
const obj3 = {
  firstName: "Sally",
  lastName: "Smith",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const fullNameBinded = obj3.fullName.bind({
  firstName: "Andy",
  lastName: "Jones",
});

console.log(fullNameBinded());
