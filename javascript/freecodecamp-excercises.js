const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let\'s go!"';

console.log (goodStr);
console.log (badStr);

//indentations, tab, new line
const myStr = "FirstLine \n\t\\SecondLine \nThirdLine"; // Change this line

console.log (myStr)

//Concatenating Strings with Plus Operator
const concatenate= 'My name is Alan,' + ' I concatenate.';

console.log (concatenate)

//Concatenating Strings with the Plus Equals Operator.  This can be very helpful to break a long string over several lines.
let ourStr = "I come first. ";
ourStr += "I come second.";

console.log (ourStr)

//Constructing Strings with Variables

const ourName = "freeCodeCamp";
const ourStr1 = "Hello, our name is " + ourName + ", how are you?";

console.log (ourStr1)

// Appending Variables to Strings
const anAdjective = "awesome!";
let ourStr2 = "freeCodeCamp is ";
ourStr2 += anAdjective;

console.log(ourStr2)

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

console.log (firstName2[1])

// Use Bracket Notation to Find the Last Character in a String
const firstName3 = "Ada";
const lastLetter = firstName3[firstName3.length - 1];

console.log (firstName3[firstName3.length - 1])

// Use Bracket Notation to Find the Nth-to-Last Character in a String
// get the value of the third-to-last letter of the 
// const firstName = "Augusta" string by using firstName[firstName.length - 3]
const firstName4 = "Augusta";
const thirdToLastLetter = firstName4[firstName4.length - 3];

console.log (firstName4[firstName4.length - 3])

// Word Blanks
// It was really ____, and we ____ ourselves ____.
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";

console.log (sentence)

// Store Multiple Values in one Variable using JavaScript Arrays
const sandwich = ["peanut butter", "jelly", "bread", "knife"];

console.log (sandwich)

// Nest one Array within Another Array. This is also called a multi-dimensional array.
const teams = [["Bulls", 23], ["White Sox", 45], "visible"];

console.log (teams) // noticed that I am not accessing the content within the nested arrays

// Access Array Data with Indexes
// exactly what I needed!
// Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array.
const array = [50, 60, 70];
const data = array[1];
console.log(array[0]);

// Modify Array Data With Indexes
const ourArray = [50, 40, 30];
ourArray[0] = 15;

console.log (ourArray)

// Access Multi-Dimensional Arrays With Indexes
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];

console.log (subarray);
console.log (nestedSubarray);
console.log (element);

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
console.log(useArr)

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

console.log(ourArray3)

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
    ["Corn", 10]
  ]
  
  console.log(myList[4])

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

  testFun('Hi Guys!', 'How are you?');
  testFun('Trying this again, ', 'it does indeed work.')
/*  1. Create a function called functionWithArgs that accepts two arguments and 
    outputs their sum to the dev console.
    2. Call the function with two numbers as arguments.
*/
  function functionWithArgs(arg1, arg2) {
    console.log(arg1 + arg2);
  }
  
  functionWithArgs(1, 2);
  functionWithArgs(7,9);
  
// Return a Value from a Function with Return
function plusThree(num) {
    return num + 3;
  }
  
const answer = plusThree(5);

  console.log(answer)

/* Question:
    Create a function timesFive that accepts one argument, 
    multiplies it by 5, and returns the new value.
*/
function timesFive(times) {
    return times * 5;
  }
  
  const product = timesFive(2)
  console.log(product)

// Global Scope and Functions
/* Using let or const, declare a global variable named myGlobal outside of any function. 
Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.
*/

// Declare the myGlobal variable below this line

const myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal = 5
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
console.log(sum)

// e.g Create a function addFive without any arguments. This function adds 5 to the sum1 variable, but its returned value is undefined.
// Setup
let sum1 = 0;

function addThree() {
  sum1 = sum1 + 3;
}

// Only change code below this line
function addFive () {
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
function addFive () {
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
processed = processArg(7) 

// Stand in Line: queueing in JS keeps items in order
// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
// Add the number to the end of the array, then remove the first element of the array.
// The nextInLine function should then return the element that was removed.
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  let removed = arr.shift()
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

function test (myCondition) {
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
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// Comparison with the Strict Equality Operator
// In this case, the function will return 'Not Equal' 
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

// Practice comparing different values
// The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
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
  if (val != 99) { // Change this line
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
  if (val !== 17) { // Change this line
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
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

// Comparison with the Greater Than Or Equal To Operator
// Like the equality operator, the greater than or equal to operator will convert data types while comparing.
// Add the greater than or equal to operator to the indicated lines so that the return statements make sense.
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

// Comparison with the Less Than Operator
// Like the equality operator, the less than operator converts data types while comparing.
// Add the less than operator to the indicated lines so that the return statements make sense.
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

// Comparison with the Less Than Or Equal To Operator
// Add the less than or equal to operator to the indicated lines so that the return statements make sense.
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
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

  if (val < 10 || val > 20 ) {
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
    return "Tiny"
  } else if (num < 10) {
    return "Small"
  } else if (num < 15) {
    return "Medium"
  } else if (num < 20) {
    return "Large"
  } else if (num >= 20) {
    return "Huge"
  } else {
    return "Change Me"
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
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes === 1) {
  return "Hole-in-one!"
} else if (strokes <= par -2) {
  return "Eagle"
} else if (strokes === par -1) {
  return "Birdie"
} else if (strokes === par) {
  return "Par"
} else if (strokes === par +1) {
  return "Bogey"
} else if (strokes === par + 2) {
  return "Double Bogey"
} else if (strokes >= par + 3) {
  return "Go Home!"
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
      answer = "apple"
      break;
    case "b":
      answer = "bird"
      break;
    case "c":
      answer = "cat"
      break;
    default:
      answer = "stuff"
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
    return undefined
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

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
  } else if (card >= 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
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
console.log(cc('K')); // Output: "1 Hold"
console.log(cc('A')); // Output: "0 Hold"

// Build JavaScript Objects
/*
Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.

You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array.
*/
const myDog = {
  // Only change code below this line
  "name": "Ari",
  legs: 4,
  tails: 1,
  friends: ["Mariah", "Blanco", "Jeenie"],

  // Only change code above this line
};

// Accessing Object Properties with Dot Notation
/* Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt. */
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

// Accessing Object Properties with Bracket Notation
// If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
// Note that property names with spaces in them must be in quotes (single or double).
// Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj['an entree'];   // Change this line
const drinkValue = testObj['the drink'];    // Change this line

// Accessing Object Properties with Variables
// Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

// Updating Object Properties
// Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder"

// Add New Properties to a JavaScript Object
// Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof"

// Delete Properties from a JavaScript Object
// Delete the tails property from myDog. You may use either dot or bracket notation.
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails

// Using Objects for Lookups
// Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "Frank",
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
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist" : "Jacob Collier",
    "title" : "Djesse Vol 2" ,
    "release_year" : 2019,
    "formats" : [
      "CD",
      "LP",
      "Vinyl"
    ]
  }
];

// Accessing Nested Objects
// Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside['glove box'];

// Accessing Nested Arrays
// Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];


// Record Collection
/* Complete the function updateRecords in the editor below to modify the object passed to the function.
* Your function must always return the entire records object.
* If value is an empty string, delete the given prop property from the album.
* If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
* If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.
* Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.
*/
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
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks") {
    records[id][prop] = value;
  } else {
    if (!records[id].hasOwnProperty("tracks")) {
      records[id]["tracks"] = [];
    }
    records[id]["tracks"].push(value);
  }
  return records;
}


updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Iterate with JavaScript While Loops
// it runs "while" a specified condition is true and stops once that condition is no longer true.
// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
// Setup
const myArray = [];

// Only change code below this line
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}

// Iterate with JavaScript For Loops
// Use a for loop to push the values 1 through 5 onto myArray.
// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 6; i++) {
  myArray.push(i)
}

// Iterate Odd Numbers With a For Loop
// Push the odd numbers from 1 through 9 to myArray using a for loop.
// Setup
const myArray1 = [];

// Only change code below this line
for (let i = 1; i < 10; i += 2) {
  myArray1.push(i)
}

// Count Backwards With a For Loop
// Push the odd numbers from 9 through 1 to myArray using a for loop.
// Setup
const myArray2 = [];

// Only change code below this line
for (let i = 9; i > 0; i -= 2 ) {
  myArray2.push(i)
} 

// Iterate Through an Array with a For Loop
// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
// Setup
const myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i]; // total = total + myArr[i]
}

// Nesting For Loops
// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  for (let i=0; i < arr.length; i++) {
    for (let j=0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

// Iterate with JavaScript Do...While Loops
// Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, 
// and i will be equal to 11 when your code has finished running.

// Setup
const myArray3 = [];
let ii = 10;

// Only change code below this line
 do {
  myArray3.push(i);
  ii++;
} while (ii < 5);


// Replace Loops using Recursion
// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0; // base case
  } else {
    return sum(arr, n-1) + arr[n-1]; // recursive case
  }
  // Only change code above this line
}

// Profile Lookup
/*
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
*/



const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {

  for (let i = 0; i < contacts.length; i++) 
  {
    if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) 
    {
      return contacts[i][prop];
    } 
    else if (contacts[i].firstName === name && !contacts[i].hasOwnProperty(prop)) 
    {
      return "No such property";
    }
  }
  return "No such contact";

  // Only change code above this line
}


console.log( lookUpProfile("Kristian", "lastName") );

console.log( lookUpProfile("Sherlock", "likes") );

console.log( lookUpProfile("Harry", "likes") );

console.log( lookUpProfile("Bob", "number") );

console.log( lookUpProfile("Bob", "potato") );

console.log( lookUpProfile("Akira", "address") );

// Generate Random Fractions with JavaScript
// Change randomFraction to return a random number instead of returning 0.

function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

// Generate Random Whole Numbers with JavaScript
// Use this technique to generate and return a random whole number between 0 and 9.
function randomWholeNum() {
  return Math.floor(Math.random() * 10)
}

// Generate Random Whole Numbers within a Range
/*
Create a function called randomRange that takes a range myMin and myMax and returns a random whole 
number that's greater than or equal to myMin and less than or equal to myMax.
*/

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

// Use the parseInt Function
// Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.
function convertToInteger(str) {
  return parseInt(str);
}

// Use the parseInt Function with a Radix
function convertToInteger(str) {
  return parseInt(str, 2);
  }
  
// Use the Conditional (Ternary) Operator
// Use the conditional operator in the checkEqual function to check if two numbers are equal or not.
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal"
}

checkEqual(1, 2);

// Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

checkSign(10);

// Use Recursion to Create a Countdown
/*
We have defined a function called countdown with one parameter (n). The function should use recursion
to return an array containing the integers n through 1 based on the n parameter. If the function is called 
with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 
should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.
*/
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

// Use Recursion to Create a Range of Numbers
/*
  We have defined a function named rangeOfNumbers with two parameters. The function should return an 
  array of integers which begins with a number represented by the startNum parameter and ends with a number 
  represented by the endNum parameter. The starting number will always be less than or equal to the ending number. 
  Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases 
  where both startNum and endNum are the same.
*/

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }

}

// ES6

// Compare Scopes of the var and let Keywords
/*
Fix the code so that i declared in the if statement is a separate variable than i 
declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.

This exercise is designed to illustrate the difference between how var and let keywords assign scope to 
the declared variable. When programming a function similar to the one used in this exercise, it is often better 
to use different variable names to avoid confusion.
*/

function checkScope() {
let i = "function scope";

if (true) {
  let i = "block scope";
  console.log("Block scope i is: ", i);
} 
console.log("Function scope i is: ", i);
return i;
}

// Mutate an Array Declared with const
// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
 s[0] = 2
 s[1] = 5
 s[2] = 7
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

// Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
Object.freeze(MATH_CONSTANTS)

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date;

// Write Arrow Functions with Parameters
// Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// Set Default Parameters for Your Functions
// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

// Use the Rest Parameter with Function Parameters
// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments
// and return their sum.

const sum = (...args) => {
  // const args = [x, y, z];

  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// Use the Spread Operator to Evaluate Arrays In-Place
// allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

// Copy all contents of arr3 into another array arr4 using the spread operator.
const arr3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr4;

arr4 = [...arr3];  // Change this line

console.log(arr4);

// Use Destructuring Assignment to Extract Values from Objects
/*Replace the two assignments with an equivalent destructuring assignment. It should still assign the 
  variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
*/
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const {today} = HIGH_TEMPERATURES;
const {tomorrow} = HIGH_TEMPERATURES;

// Use Destructuring Assignment to Assign Variables from Objects
/* Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables
  highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
*/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const { today: highToday } = HIGH_TEMPERATURES
const { tomorrow: highTomorrow } = HIGH_TEMPERATURES

// Use Destructuring Assignment to Assign Variables from Nested Objects
/*Replace the two assignments with an equivalent destructuring assignment. It should still assign the 
  variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.
*/
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const { today: {low: lowToday }} = LOCAL_FORECAST;
const { today: {high : highToday1 }} = LOCAL_FORECAST;

// Use Destructuring Assignment to Assign Variables from Arrays
// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];

// Destrucuring Assignment with the Rest Operator to Reassign Array Elements
/*Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). 
  removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.
*/

function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...shorterList] = list ; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
// Use destructuring assignment within the argument to the function half to send only max and min inside the function.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
}

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0;

// Create Strings using Template Literals
/*
  Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

  Use an iterator method (any kind of loop) to get the desired output (shown below).

  [
    '<li class="text-warning">no-var</li>',
    '<li class="text-warning">var-on-top</li>',
    '<li class="text-warning">linebreak</li>'
  ]
*/

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line

  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  // Only change code above this line
  return failureItems;
}

const failuresList = makeList(result.failure);

// Write Concise Object Literal Declarations Using Object Property Shorthand
// Use object property shorthand with object literals to create and return an object with name, age and gender properties.
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return ({ name, age, gender })
 };

// Write Concise Declarative Functions with ES6
//  Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

// Use class Syntax to Define a Constructor Function
// Use the class keyword and write a constructor to create the Vegetable class.
// The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.

// Only change code below this line
// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
}
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// Use getters and setters to Control Access to an Object
/*
Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.
*/

// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  get temperature() {
    return 5/9 * (this.fahrenheit - 32);
  }
  set temperature(celsius) {
    this.fahrenheit = celsius * 9.0 / 5 + 32;
  }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius


// Create a Module Script
// Add a script to the HTML document of type module and give it the source file of index.js
/*
<html>
  <script type="module" src="index.js"></script>

  <body>
    <!-- Only change code below this line -->

    <!-- Only change code above this line -->
  </body>
</html>
*/

// Use export to Share a Code Block
// There are two string-related functions in the editor. Export both of them using the method of your choice.
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { uppercaseString, lowercaseString}

// Reuse JavaScript Code Using import
// Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString 
// functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.

import { uppercaseString, lowercaseString } from './string_functions.js'
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

// Use * to Import Everything from a File#
// The object will contain all of the exports

// The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the 
// current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.
import * as stringFunctions from './string_functions.js';
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// Create an Export Fallback with export default
// you cannot use export default with var, let, or const

// The following function should be the fallback value for the module. Please add the necessary code to do so.
export default function subtract(x, y) {
  return x - y;
}

// Import a Default Export
//  You can use any name when importing a default.

// In the following code, import the default export from the math_functions.js file, found in the same directory as this file. Give the import the name subtract.
import subtract from './math_functions.js'
// Only change code above this line

subtract(7,4);

// Create a JavaScript Promise
//  It takes a function, as its argument, with two parameters - resolve and reject.

// Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.
const makeServerRequest = new Promise((resolve, reject) => {
  
})

// Complete a Promise with resolve and reject

// Make the promise handle success and failure. If responseFromServer is true, call the resolve method to 
// successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, 
// use the reject method instead and pass it the string: Data not received.

const makeServerRequest1 = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data") // Change this line
  } else {  
    reject("Data not received")// Change this line
  }
});


// Handle a Fulfilled Promise with then
// Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.
// result comes from the argument given to the resolve method.

const makeServerRequest2 = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest2.then(result => {
  console.log(result)
})

// Handle a Rejected Promise with catch
// catch is the method used when your promise has been rejected.
// error is the argument passed in to the reject method.

// Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.
const makeServerRequest3 = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest3.then(result => {
  console.log(result);
});

makeServerRequest3.catch(error => {
  console.log(error);
});



// REGULAR EXPRESSIONS

// Using the Test Method
// Apply the regex myRegex on the string myString using the .test() method.

let myString = `Hello, World!`;
let myRegex = /Hello/;
let result1 = myRegex.test(myString); // Change this line
console.log(result1)


// Match Literal Strings
// Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);

// Match a Literal String with Different Possibilities
// Complete the regex petRegex to match the pets dog, cat, bird, or fish.
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result3 = petRegex.test(petString);

// Ignore Case While Matching
// Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations 
// or variations with spaces.

let myString1 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result4 = fccRegex.test(myString1);

// Extract Matches
// Apply the .match() method to extract the string coding.
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result5 = extractStr.match(codingRegex); // Change this line

// Find More Than the First Match
// To search or extract a pattern more than once, you can use the global search flag: g.

// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar. You can have multiple flags on your regex like /search/gi
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result6 = twinkleStar.match(starRegex); // Change this line

// Match Anything with Wildcard Period
// The wildcard character . will match any one character. 
// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let result7 = unRegex.test(exampleStr);

// Match Single Character with Multiple Possibilities
// You can search for a literal pattern with some flexibility with character classes
// For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. 
// The [aiu] is the character class that will only match the characters a, i, or u.

// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample. 
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result8 = quoteSample.match(vowelRegex); // Change this line

// Match Letters of the Alphabet
// Inside a character set, you can define a range of characters to match using a hyphen character: -.

// Match all the letters in the string quoteSample. Note: Be sure to match both uppercase and lowercase letters.
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result9 = quoteSample.match(alphabetRegex); // Change this line

// Match Numbers and Letters of the Alphabet
// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/gi; // Change this line
let result10 = quoteSample.match(myRegex1); // Change this line

// Match Single Characters Not Specified
// you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.

// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^aeiou0-9]/gi; // Change this line
let result11 = quoteSample.match(myRegex2); // Change this line

// Match Characters that Occur One or More Times
// For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

// You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.
let difficultSpelling = "Mississippi";
let myRegex3 = /s+/g; // Change this line
let result12 = difficultSpelling.match(myRegex3);

