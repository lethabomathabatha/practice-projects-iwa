// strings, numbers, boolean, null, undefined
// symbol and bigint to follow later

const first = {
    name: 'Lethabo'
}
const second = {
    name: 'Lethabo'
}
console.log(first.name === second.name)
// 

let first1 = {
    name: 'Lethabo'
}
let second1 = {
    name: 'Lethabo'
}
console.log(first1 === second1)

// 

let first2 = {
    name: 'Lethabo'
}
console.log(first2.name)

first2.name = 'John'
console.log(first2.name)

//
const first3 = {
    name: 'Lethabo'
}
const second3 = first3

second.name = 'John'
console.log(first3, second3)

// 
const symbol = Symbol()
const obj = {
    [symbol]: 'Hello'
}

console.log(obj[symbol])

// 
const first4 = {
    name: 'Lethabo'
}

const second4 = first
second4.name = 'Hello'

console.log(first4.name) // Lethabo
console.log(second4.name) // Hello

// 
const objABC = {
    name: 'Lele',
    age: 23,
    id: 4256378765432,
}

console.log(objABC)

// Math
/*
const original = 120
const discount = 14

const percentage = (original/100) * discount
console.log(percentage)
VM1984:5 16.8
undefined
const original = 120
const discount = 14

const percentage = (original/100) * discount
console.log(`Big Sale! ${Math.round(percentage)}% off!`)
VM2121:5 Big Sale! 17% off!
undefined
const original = 135.60
const discount = 14.24

const percentage = (original/100) * discount
console.log(`Big Sale! ${Math.round(percentage.toFixed(2)}% off!`)
VM2202:5 Uncaught SyntaxError: missing ) after argument list
const original = 135.60
const discount = 14.24

const percentage = (original/100) * discount
console.log(`Big Sale! ${Math.round(percentage.toFixed(2))}% off!`)
VM2210:5 Big Sale! 19% off!
undefined
Math.max(100,90,43, 129, -5)
129
Math.min(100,90,43, 129, -5)
129
129
Math.min(100,90,43, 129, -5)

-5
Math.random()
0.6646452128096798
Math.round(Math.random() * 100)
7
Math.round(Math.random() * 100)
92
Math.round(Math.random() * 100)
60
Math.round(Math.random() * 100)
96
console.log(Date)
VM2629:1 ƒ Date() { [native code] }
undefined
const instance = new Date()
console.log(instance)
VM2743:2 Wed Apr 05 2023 09:40:39 GMT+0200 (South Africa Standard Time)

// look at date-fns, temporal javascript
// check out unix time
const instance = new Date ()
console.log(instance.getTime())
log: 1680680906698
*/




/**
 * Hey, this is a tooltip
 */


/**
 * This is the logged in user
 */
const userAB = {
    /**
     * The legal name of the user
     */
    legalName: 'Lethabo Lele Mathabatha',

    /**
     * Preferred name of user, not legal
     */
    name: 'Lele Mathabatha',
    
    /**
     * RSA ID number of user
     */
    id: '00343521' ,

    /**
     * Indication of logging in atleast once this current year
     */
    active: true,
}

if (userAB.active) {}


console.log(valueAB)

const example = document.querySelector('button')
example.disabled = true

const exampleObj = {
    go: 100,
    user: 'Lethabo',
    doThing: () => console.log('yo')
}

if (exampleObj.go === 100) {
    exampleObj.doThing()
}


const objName = {
    firstKey: 1,
    secondKey: true,
    thirdKey:"Hello",
}

console.log(objName.firstKey)
console.log(objName.secondKey)
console.log(objName.thirdKey)

/*
const user1 = {
    name: "Lethabo",
    surname: "Mathabatha",
    age: 23,
}

const user2 = {
    name: "Lele",
    surname: "Mathabatha",
    age: undefined,
}


const user3 = {
    name: "Thabo",
    surname: "Mathabatha",
    age: 4,
}

console.log(user1.name, user2.name, user3.age)

if(user1.name === "Lethabo" && user2.name === "Lele"){
    console.log("Mathabatha Family")
}
*/
const families = {
    Mathabatha: {
        Lethabo: {
            name: "Lethabo",
            surname: "Mathabatha",
            age: 23,
        },
        Lele: {
            name: "Lele",
            surname: "Mathabatha",
            age: undefined,
        },
        Thabo: {
            name: "Thabo",
            surname: "Mathabatha",
            age: 4,
        }
    }
} 

console.log(families.Mathabatha.Lethabo.age)

const kids = {
    Thabo,
    10: "yo"
}


const data = {
    languages: {
        af: "Afrikaans",
        en: "English",
    }
}


//Branching Logic


/*function createPassword() {
    secretHiddenPassword = '2otb732gh24f0'
    console.log("Your password is: " + secretHiddenPassword)
  }
  
  function doSomethingElseNotRelatedToPassword () {
      console.log("I have access to the password in here too: " + secretHiddenPassword)
  }
  
  createPassword() 
  // Outputs: Your password is: 2otb732gh24f0
  
  doSomethingElseNotRelatedToPassword() 
  // Outputs: I have access to the password in here too: 2otb732gh24f0



let value = (number) => {
    let value = 43;
    console.log("number is: " + number);
  }


/*
let value = function (number) {
    console.log("number is: " + number);
  }
  
  // Several lines of code wrapping the above, making it hard to notice the declaration

  // Uncaught SyntaxError: Identifier 'value' has already been declared
*/





/*
console.log(one)
console.log(two)

var one = 'Magic, but unpredictable' 
// undefined

let two = 'Not magic, but predictable' 
//  Uncaught ReferenceError: Cannot access 'two' before initialization
*/

console.log(value)
getName()

console.log(value)
var value = 'John'

function getName () {
  value = 'Mary'
}


/*const exampleA = 21;
let exampleB = 51;

console.log(exampleB);

exampleB = 1;
console.log(exampleB);

if (true) {
    exampleB = 8;
    console.log(exampleB);
}

if (true) {
    console.log(13);

    if (true) {
    
        console.log(2);


        if (false) {
            
            console.log(3);
        }
    }
}
/*
const test1 = () => {
    console.log(value);
}

const test2 = () => {
    console.log(value);
}

test1();
test2();
*/



const valueA = 123;
const valueB= 10;
const valueC = valueA / valueB


console.log(valueA);
console.log( valueB);
console.log(valueA + valueB);
console.log(valueC);










//This is an online comment

/*And this here,
is a multi-line
comment*/

const id = 453523;

/**This is the assigned user. The user id is saved in: {@link id} */ 
const user= 'Lethabo';


console.log (user);

import { subtractHandler, addHandler,  } from './handlers.js';
import { hello as helloA } from './code-a.js';
import { hello as helloB} from './code-b.js';
console.log (helloA, helloB);

const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5; 


const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')


subtract.addEventListener ('click', subtractHandler)
add.addEventListener ('click', addHandler)