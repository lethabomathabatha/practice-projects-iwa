const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');


/*
// function 1: subtractHandler
const subtractHandler = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT;
    number.value = newValue;

    if (add.disabled) {
        add.disabled = false;
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true;
    }
};

// function 2: addHandler
const addHandler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT;
    number.value = newValue;

    if (subtract.disabled) {
        subtract.disabled = false;
    }

    if (newValue >= MAX_NUMBER) {
        add.disabled = true;
    }

    updateColor();
};

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);
*/

// Functions lecture:

// declaring a function, and calling it
const example1 = () => {
    console.log('Hey There')
    console.log("How're you")
    console.log('?')
    // console.log(Math.random)
}

// example1()
// example1()
// example1()
// example1()

const example2 = example1
const example3 = example1
const example4 = example3

example1()
example2()
example3()








/*
import { subtractHandler, addHandler} from './handlers.js';
import { hello as helloA } from './code-a.js';
import { hello as helloB} from './code-b.js';
console.log (helloA, helloB);
*/


/*
const updateColor = () => {
    subtract.style.background = 'red';
    add.style.background = 'red';
};
*/