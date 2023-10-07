//Q1 Destructuring an array
const animals = ["cat", "dog", "crocodile"];

const [col1] = animals;
console.log(col1);

// Q2 Destructure an object
const person = {
  firstName: "Jonathan",
  surname: "Banerjee",
  age: 28,
  footballTeam: "Watford",
  location: {
    name: { long: "London", short: "LON" },
  },
};

// Question 3 Change the name of one of the items you pull out of the object
// & Question 4 Add a default value to the name above
const { name: personsName = "Steve" } = person.location;
console.log(personsName);

// Question 5 Use the array method flat
const arr = ["Deeney", "Forestieri", ["Hogg", "Anya", "Almunia", "Vydra"]];
console.log(arr.flat());

//Question 6 Use Array.from ()
const country = "Brazil";
const array = Array.from(country);
console.log(Array.from(country));

// Question 7 Use Array.isArray ()
console.log(Array.isArray(Array.from(country)));

//Question 8 Shorthand Object Properties:
const device = "Macbook";
const OS = "Mojave";
const version = "M2";

const laptop = {
  device,
  OS,
  version,
};
console.log(laptop);

//Question 9 function shorthand in an object.
function shorthandLuke() {
  return 3 + 4;
}

const o = {
  name: "Harry Potter",
  shorthandLuke,
};

console.log(o.shorthandLuke());

//Question 10 Rest on an array
const furniture = ["Chair", "Table", "Lamp", "Sofa"];
const [col2, ...allTheRest] = furniture;

//This just all the rest, as col1
// taken by a previous function.
console.log(...allTheRest);

//Question 11 Use Rest on an object
const { city, ...otherInfo } = {
  city: "London",
  population: 1000000,
  isCapital: true,
  mayor: "Sadiq Khan",
};

console.log(otherInfo);

// Question 12 Use Spread on an array
const arr1 = ["Pickles", "Onions", "Pears"];
const arr2 = ["Cheese", "Onion", "Chedder"];

const newArr = [...arr1, ...arr2, true];

console.log(newArr);

// Question 13 Spreading an object
const artists = {
  musician: "Drake",
  painter: "Van Gogh",
  actor: "Morgan Freeman",
};

//Creating a new object.
const creatives = { ...artists, director: "Alfred Hitchcock" };
console.log("The creatives are: " + JSON.stringify(creatives));

//Question 14 Creating a class
// & Question 15 extending the class

class school {
  constructor(schoolName, location) {
    this.schoolName = schoolName;
    this.location = location;
  }
  getSchoolName() {
    return this.schoolName;
  }

  getLocation() {
    return this.location;
  }
}

class subjects extends school {
  constructor(schoolName, location, subjectTitle, teacher) {
    super(schoolName, location);
    this.subjectTitle = subjectTitle;
    this.teacher = teacher;
  }

  getSubjectTitle() {
    return this.subjectTitle;
  }

  getTeacher() {
    return this.teacher;
  }
}

class tutor extends subjects {
  constructor(schoolName, location, teacher, subjectTitle, previousJob) {
    super(schoolName, location, teacher, subjectTitle);
    this.previousJob = previousJob;
  }
}

const school1 = new school("St. Anthony's", "Hampstead");
console.log(school1);

const myFavSubject = new subjects(
  "St.Anthony's",
  "London",
  "Maths",
  "Bobby Seagull"
);
console.log(myFavSubject.getSchoolName());
console.log(myFavSubject.getSubjectTitle());
console.log(myFavSubject.getTeacher());
