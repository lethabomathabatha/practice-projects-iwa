const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
const badStr = 'Finn responds, "Let\'s go!"';

console.log(goodStr);
console.log(badStr);

//indentations, tab, new line
const myStr = "FirstLine \n\t\\SecondLine \nThirdLine"; // Change this line

console.log(myStr);

//Concatenating Strings with Plus Operator
const concatenate = "My name is Alan," + " I concatenate.";

console.log(concatenate);

//Concatenating Strings with the Plus Equals Operator.  This can be very helpful to break a long string over several lines.
let ourStr = "I come first. ";
ourStr += "I come second.";

console.log(ourStr);

//Constructing Strings with Variables

const ourName = "freeCodeCamp";
const ourStr1 = "Hello, our name is " + ourName + ", how are you?";

console.log(ourStr1);

// Appending Variables to Strings
const anAdjective = "awesome!";
let ourStr2 = "freeCodeCamp is ";
ourStr2 += anAdjective;

console.log(ourStr2);

// Find the Length of a String
console.log("Alan Peter".length);

// Use Bracket Notation to Find the First Character in a String
const firstName = "Charles";
const firstLetter = firstName[0];

console.log(firstName[0]);

// Understand String Immutability
let myStr3 = "Bob";
myStr3 = "Job";

console.log(myStr3);

// Use Bracket Notation to Find the Nth Character in a String
const firstName2 = "Ada";
const secondLetterOfFirstName = firstName2[1];

console.log(firstName2[1]);

// Use Bracket Notation to Find the Last Character in a String
const firstName3 = "Ada";
const lastLetter = firstName3[firstName3.length - 1];

console.log(firstName3[firstName3.length - 1]);

// Use Bracket Notation to Find the Nth-to-Last Character in a String
// get the value of the third-to-last letter of the
// const firstName = "Augusta" string by using firstName[firstName.length - 3]
const firstName4 = "Augusta";
const thirdToLastLetter = firstName4[firstName4.length - 3];

console.log(firstName4[firstName4.length - 3]);

// Word Blanks
// It was really ____, and we ____ ourselves ____.
const sentence =
  "It was really " +
  "hot" +
  ", and we " +
  "laughed" +
  " ourselves " +
  "silly" +
  ".";

console.log(sentence);

// Store Multiple Values in one Variable using JavaScript Arrays
const sandwich = ["peanut butter", "jelly", "bread", "knife"];

console.log(sandwich);

// Nest one Array within Another Array. This is also called a multi-dimensional array.
const teams = [["Bulls", 23], ["White Sox", 45], "visible"];

console.log(teams); // noticed that I am not accessing the content within the nested arrays

// Access Array Data with Indexes
// exactly what I needed!
// Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array.
const array = [50, 60, 70];
const data = array[1];
console.log(array[0]);

// Modify Array Data With Indexes
const ourArray = [50, 40, 30];
ourArray[0] = 15;

console.log(ourArray);

// Access Multi-Dimensional Arrays With Indexes
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];

console.log(subarray);
console.log(nestedSubarray);
console.log(element);

// Manipulate Arrays With push Method
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

console.log(arr1);
console.log(arr2);

// Manipulate Arrays With pop Method
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

// *how to then use that stored pop value e.g:
const useArr = 4 + oneDown;
console.log(useArr);

// Manipulate Arrays With shift Method
// It works just like .pop(), except it removes the first element instead of the last.
const ourArray2 = ["Stimpson", "J", ["cat"]];
const removedFromOurArray2 = ourArray2.shift();

console.log(ourArray2);
console.log(removedFromOurArray2);

// Manipulate Arrays With unshift Method
// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
const ourArray3 = ["Stimpson", "J", "cat"];
ourArray3.shift();
ourArray3.unshift("Happy");

console.log(ourArray3);

// Shopping List
/* Instructions: 
Create a shopping list in the variable myList. 
The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. 
The second element should be a number representing the quantity i.e. 
["Chocolate Bar", 15]

There should be at least 5 sub-arrays in the list.
*/
const myList = [
  ["Chocolate Bar", 15],
  ["Potato Chips", 3],
  ["Apples", 4],
  ["Bananas", 2],
  ["Sweet Potatoes", 5],
  ["Corn", 10],
];

console.log(myList[4]);

// Write Reusable JavaScript with Functions
function functionName() {
  console.log("Hello World");
  console.log("HeyWorld");
}
functionName();
functionName();

// Passing Values to Functions with Arguments
function testFun(param1, param2) {
  console.log(param1, param2);
}

testFun("Hi Guys!", "How are you?");
testFun("Trying this again, ", "it does indeed work.");
/*  1. Create a function called functionWithArgs that accepts two arguments and 
    outputs their sum to the dev console.
    2. Call the function with two numbers as arguments.
*/
function functionWithArgs(arg1, arg2) {
  console.log(arg1 + arg2);
}

functionWithArgs(1, 2);
functionWithArgs(7, 9);

// Return a Value from a Function with Return
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);

console.log(answer);

/* Question:
    Create a function timesFive that accepts one argument, 
    multiplies it by 5, and returns the new value.
*/
function timesFive(times) {
  return times * 5;
}

const product = timesFive(2);
console.log(product);

// Global Scope and Functions
/* Using let or const, declare a global variable named myGlobal outside of any function. 
Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.
*/

// Declare the myGlobal variable below this line

const myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Local Scope and Functions
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest(); // this calls the function
// console.log(loc) // an error will be thrown because 'loc' is not defined outside of a function

// Global vs Local Scope in Functions
// the local variable takes precedence over the global variable.

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

// console.log(someVar)

// Understanding Undefined Value returned from a Function
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
addSum(5);
addSum(7);
console.log(sum);

// e.g Create a function addFive without any arguments. This function adds 5 to the sum1 variable, but its returned value is undefined.
// Setup
let sum1 = 0;

function addThree() {
  sum1 = sum1 + 3;
}

// Only change code below this line
function addFive() {
  sum1 = sum1 + 5;
}

// Only change code above this line

addThree();
addFive();

// Understanding Undefined Value returned from a Function
let sum2 = 0;

function addSum(num2) {
  sum2 = sum2 + num2;
}

addSum(3);

// Setup
let sum3 = 0;

function addThree() {
  sum3 = sum3 + 3;
}

// Only change code below this line
function addFive() {
  sum3 = sum3 + 5;
}

// Only change code above this line

addThree();
addFive();

ourSum = sum(5, 12);

// Assignment with a Returned Value
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

// Stand in Line: queueing in JS keeps items in order
// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
// Add the number to the end of the array, then remove the first element of the array.
// The nextInLine function should then return the element that was removed.
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  let removed = arr.shift();
  return removed;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Understanding Boolean Values
// Modify the welcomeToBooleans function so that it returns true instead of false.

function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

// Use Conditional Logic with If Statements
// Example:

function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);

// Excercise:
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  } else {
    return "No, that was false";
  }

  // Only change code above this line
}

// Comparison with the Equality Operator
// Note: the == operator performs a type conversion, meaning that it attempts to convert the values before comparing them.
// Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// Comparison with the Strict Equality Operator
// In this case, the function will return 'Not Equal'
// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

// Practice comparing different values
// The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.
// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// Comparison with the Inequality Operator
// Like the equality operator, the inequality operator will convert data types of values while comparing.
// Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.
// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

// Comparison with the Strict Inequality Operator
// means "Strictly Not Equal" and returns false where strict equality would return true
// Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

// Comparison with the Greater Than Operator
// Like the equality operator, the greater than operator will convert data types of values while comparing.
// e.g. 7   > '3' // true
// Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

// Comparison with the Greater Than Or Equal To Operator
// Like the equality operator, the greater than or equal to operator will convert data types while comparing.
// Add the greater than or equal to operator to the indicated lines so that the return statements make sense.
function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

// Comparison with the Less Than Operator
// Like the equality operator, the less than operator converts data types while comparing.
// Add the less than operator to the indicated lines so that the return statements make sense.
function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

// Comparison with the Less Than Or Equal To Operator
// Add the less than or equal to operator to the indicated lines so that the return statements make sense.
function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

// Comparisons with the Logical And Operator
// Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

// Comparisons with the Logical Or Operator
// Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

// Introducing Else Statements
// Combine the if statements into a single if/else statement.
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

// Introducing Else If Statements
// Convert the logic to use else if statements.
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

// Logical Order in If Else Statements
// Change the order of logic in the function so that it will return the correct statements in all cases.
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

// Chaining If Else Statements
// Write chained if/else if statements to fulfill the following conditions:
// num < 5 - return Tiny
// num < 10 - return Small
// num < 15 - return Medium
// num < 20 - return Large
// num >= 20 - return Huge
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } else {
    return "Change Me";
  }

  // Only change code above this line
}

testSize(7);

// Golf Code
/* n the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
*/
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!";
  } else {
    return "Change Me";
  }
  // Only change code above this line
}

golfScore(5, 4);

// Selecting from Many Options with Switch Statements
// A switch statement compares the value to the case statements which define various possible values.
/*Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta
*/
function caseInSwitch(val) {
  let answer = "";

  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

// Adding a Default Option in Switch Statements
// Think of it like the final else statement in an if/else chain.
/*
Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff
*/
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

// Multiple Identical Options in Switch Statements
/*
Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range.
*/
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  // Only change code above this line
  return answer;
}

sequentialSizes(1);

// Replacing If Else Chains with Switch
// Change the chained if/else if statements into a switch statement.
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

// Returning Boolean Values from Functions
// Fix the function isLess to remove the if/else statements.
function isLess(a, b) {
  // Only change code below this line
  return a < b;
  // Only change code above this line
}

isLess(10, 15);

// Return Early Pattern for Functions
// the function exits at the return statement.
/* Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

Hint
Remember that undefined is a keyword, not a string. */
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

// Counting Cards
/*You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
* Do NOT reset count to 0 when value is 7, 8, or 9.
* Do NOT return an array.
* Do NOT include quotes (single or double) in the output.
*/
let count = 0;

function cc(card) {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (
    card >= 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A"
  ) {
    count--;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log(cc(2)); // Output: "1 Hold"
console.log(cc(3)); // Output: "2 Hold"
console.log(cc(7)); // Output: "2 Hold"
console.log(cc("K")); // Output: "1 Hold"
console.log(cc("A")); // Output: "0 Hold"

// Build JavaScript Objects
/*
Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.

You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array.
*/
const myDog = {
  // Only change code below this line
  name: "Ari",
  legs: 4,
  tails: 1,
  friends: ["Mariah", "Blanco", "Jeenie"],

  // Only change code above this line
};

// Accessing Object Properties with Dot Notation
/* Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt. */
// Setup
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

// Only change code below this line
const hatValue = testObj.hat; // Change this line
const shirtValue = testObj.shirt; // Change this line

// Accessing Object Properties with Bracket Notation
// If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
// Note that property names with spaces in them must be in quotes (single or double).
// Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

// Only change code below this line
const entreeValue = testObj["an entree"]; // Change this line
const drinkValue = testObj["the drink"]; // Change this line

// Accessing Object Properties with Variables
// Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

// Only change code below this line
const playerNumber = 16; // Change this line
const player = testObj[playerNumber]; // Change this line

// Updating Object Properties
// Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.
// Setup
const myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

// Only change code below this line
myDog.name = "Happy Coder";

// Add New Properties to a JavaScript Object
// Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog.bark = "woof";

// Delete Properties from a JavaScript Object
// Delete the tails property from myDog. You may use either dot or bracket notation.
// Setup
const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};

// Only change code below this line
delete myDog.tails;

// Using Objects for Lookups
// Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

// Testing Objects for Properties
// checks if the property of a given object exists or not.
// Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return checkProp;
  } else {
    return "Not Found";
  }

  // Only change code above this line
}

// Manipulating Complex Objects
// Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Jacob Collier",
    title: "Djesse Vol 2",
    release_year: 2019,
    formats: ["CD", "LP", "Vinyl"],
  },
];

// Accessing Nested Objects
// Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];

// Accessing Nested Arrays
// Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];

// Record Collection
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');