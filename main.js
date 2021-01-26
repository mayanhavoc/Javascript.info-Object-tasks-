// 1. Hello object

//Write the code, one line for each action

//Create an empty object -user-

// let user = {};
// //add the property -name- with the value -John-
// user.name = "John";

// //add the property -surname- with the value -Smith-
// user.surname = "Smith";

// //change the value of the -name- to Pete
// user.name = "Pete";

// //Remove the property -name- from the object
// delete user.name;

// 2. Check for emptiness

// Write a function -isEmpty(obj)- which returns -true- if the obect has no properties, -false- otherwise.

let schedule = {};
schedule["8:30"] = "get up";

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

alert(isEmpty(schedule));

// 3. Sum object properties

//Write the code to sum all salaries and store in the variable sum. Should be 390.

// If salaries is empty, then the result must be 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);

// 4. Multiply numeric property values by 2

//Create a function -multiplyNumeric(obj) that multiplies all numeric property values of -obj- by -2-.

function multNum(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

let list = {
  num: 33,
  name: "silvia",
  position: 2,
  price: 3,
  style: "funky",
};

console.log(multNum(list));
