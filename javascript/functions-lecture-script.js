const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;

const number = document.querySelector('[data-keys="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');

const updateColor = () => {
    subtract.style.background = 'red';
    add.style.background = 'red';
};

const subtractHandler = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT;
    number.value = newValue;

    if (add.disabled === true) {
        add.disabled = false;
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true;
    }
};

const addHandler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT;
    number.value = newValue;

    if (subtract.disabled === true) {
        subtract.disabled = false;
    }

    if (newValue >= MAX_NUMBER) {
        add.disabled = true;
    }

    updateColor();
};

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);



import { subtractHandler, addHandler} from './handlers.js';
import { hello as helloA } from './code-a.js';
import { hello as helloB} from './code-b.js';
console.log (helloA, helloB);
