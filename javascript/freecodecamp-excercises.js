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

