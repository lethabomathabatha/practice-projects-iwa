const objABC = {
    name: 'Lele',
    age: 23,
    id: 4256378765432,
}

console.log(objABC)




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
    id: 00343521 ,

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