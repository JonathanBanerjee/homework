//Question 1: Create a function that accepts two numbers,
// adds them and returns the result.
function addition(x, y) {
  return x + y;
}

//Question 2 Reverse an array:
var names = ["Jonathan", "Sally", "Suzy"];
function reversy(names) {
  names.reverse();
  return names;
}

var namesReversed = reversy(names);
console.log(namesReversed);

//Question 3 Create an array with 10 items
var person = [
  { firstname: "Jonathan", age: 28, sport: "football" },
  { firstname: "Jack", age: 26, sport: "iceskating" },
  { firstname: "Jimmy", age: 34, sport: "basketball" },
  { firstname: "Sandra", age: 29, sport: "curling" },
  { firstname: "Sally", age: 29, sport: "hockey" },
  { firstname: "Jeremy", age: 19, sport: "basketball" },
  { firstname: "Chris", age: 29, sport: "sailing" },
  { firstname: "Christina", age: 39, sport: "sailing" },
  { firstname: "Suzie", age: 26, sport: "climbing" },
  { firstname: "Stephen", age: 28, sport: "tennis" },
];

//Question 4 Update one of the items
person[3] = { firstname: "Harry", age: 31, sport: "swimming" };
console.log(person);

//Question 5 Delete half of the array
person.splice(4, 5);
console.log(person);

//Pop method
person.pop();
console.log(person);

//Push Method
person.push({ firstname: "Lucy", age: 27, sport: "darts" });
console.log(person);

//Shift method
person.shift();
console.log(person);

//Unshift method
person.unshift({ firstname: "Jonathan", age: 28, sport: "football" });
console.log(person);

//Concatenating
var men = [
  { firstname: "Jonathan", age: 28, sport: "football" },
  { firstname: "Jack", age: 26, sport: "iceskating" },
  { firstname: "Jimmy", age: 34, sport: "basketball" },
  { firstname: "Jeremy", age: 19, sport: "basketball" },
  { firstname: "Chris", age: 29, sport: "sailing" },
  { firstname: "Stephen", age: 28, sport: "tennis" },
];

var women = [
  { firstname: "Sandra", age: 29, sport: "curling" },
  { firstname: "Christina", age: 39, sport: "sailing" },
  { firstname: "Suzie", age: 26, sport: "climbing" },
  { firstname: "Sally", age: 29, sport: "hockey" },
];

var everyone = men.concat(women);
console.log(everyone);

//Splicing
//Replaces Jonathan with John
everyone.splice(0, 1, { firstname: "John", age: 22, sport: "iceskating" });
console.log(everyone);

//slicing
//Removes Jack, John and Jimmy
var slicedArray = everyone.slice(3);
console.log(slicedArray);

//Reverse
var reversedArray = everyone.reverse();
console.log(reversedArray);

//Join
var pokemon = ["Squirtle", "Bulbasaur", "Charmander"];
console.log("Choose between: " + pokemon.join(" - "));

//forEach
// Gets the first letter of each pokemon name
pokemon.forEach(function (data) {
  console.log(data[0]);
});

//Includes
//Expected output: False
console.log(pokemon.includes("pikachu"));

//indexOf
//Expected output: 2
console.log(pokemon.indexOf("Charmander"));

//Every
//Expected output: true;
var morepeople = [
  { firstname: "Jonathan", age: 26, sport: "football" },
  { firstname: "Jack", age: 26, sport: "iceskating" },
  { firstname: "Jimmy", age: 26, sport: "basketball" },
  { firstname: "Sandra", age: 26, sport: "curling" },
  { firstname: "Sally", age: 26, sport: "hockey" },
  { firstname: "Jeremy", age: 26, sport: "basketball" },
  { firstname: "Chris", age: 26, sport: "sailing" },
  { firstname: "Christina", age: 26, sport: "sailing" },
  { firstname: "Suzie", age: 26, sport: "climbing" },
  { firstname: "Stephen", age: 26, sport: "tennis" },
];
console.log(
  morepeople.every(function (item) {
    if (item.age === 26) {
      return true;
    } else {
      return false;
    }
  })
);

//Some
//Expected output: true
console.log(
  morepeople.some(function (item) {
    if (item.sport === "football") {
      return true;
    } else {
      return false;
    }
  })
);

// Filter
// Expected output: [ { firstname: 'Jonathan', age: 26, sport: 'football' } ]
console.log(
  morepeople.filter(function (item) {
    if (item.sport === "football") {
      return true;
    } else {
      return false;
    }
  })
);

// Find
// Expected output: {firstname: 'Jeremy', age: 26, sport: 'basketball' }
console.log(
  morepeople.find(function (item) {
    if (item.firstname == "Jeremy" && item.sport === "basketball") {
      return true;
    } else {
      return false;
    }
  })
);

// findIndex
//Expected output: 5
console.log(
  morepeople.findIndex(function (item) {
    if (item.firstname == "Jeremy" && item.sport === "basketball") {
      return true;
    } else {
      return false;
    }
  })
);

// Sort Expected output: Person's array sorted by age.
var person = [
  { firstname: "Jonathan", age: 28, sport: "football" },
  { firstname: "Jack", age: 26, sport: "iceskating" },
  { firstname: "Jimmy", age: 34, sport: "basketball" },
  { firstname: "Sandra", age: 29, sport: "curling" },
  { firstname: "Sally", age: 29, sport: "hockey" },
  { firstname: "Jeremy", age: 19, sport: "basketball" },
  { firstname: "Chris", age: 29, sport: "sailing" },
  { firstname: "Christina", age: 39, sport: "sailing" },
  { firstname: "Suzie", age: 26, sport: "climbing" },
  { firstname: "Stephen", age: 28, sport: "tennis" },
];

person.sort(function (a, b) {
  if (a.age < b.age) {
    return -1;
  } else if (a.age > b.age) {
    return 1;
  } else {
    return 0;
  }
});

console.log(person);

//Map
// Expected output: list of first names;
var person = [
  { firstname: "Jonathan", age: 28, sport: "football" },
  { firstname: "Jack", age: 26, sport: "iceskating" },
  { firstname: "Jimmy", age: 34, sport: "basketball" },
  { firstname: "Sandra", age: 29, sport: "curling" },
  { firstname: "Sally", age: 29, sport: "hockey" },
  { firstname: "Jeremy", age: 19, sport: "basketball" },
  { firstname: "Chris", age: 29, sport: "sailing" },
  { firstname: "Christina", age: 39, sport: "sailing" },
  { firstname: "Suzie", age: 26, sport: "climbing" },
  { firstname: "Stephen", age: 28, sport: "tennis" },
];

//
var firstNames = person.map(function (item) {
  return item.firstname;
});

console.log(firstNames);
