


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