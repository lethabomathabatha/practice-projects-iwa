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
