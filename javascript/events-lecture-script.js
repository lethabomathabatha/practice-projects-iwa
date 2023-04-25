// access the DOM:
// The # is for id

// const example = document.querySelector('#example');
/*
// this is the event type
example.onClick = () => { 
    example.innerText = 'Clicked.' // the inner text of the element with id example will be changed to 'Clicked.'
    example.disabled = true
}
*/


/*
example.addEventListener(
    'click', // this is the event type
    // when clicked, the code inside this arrow function will run
    () => { 
        example.innerText = 'Clicked.' // the inner text of the element with id example will be changed to 'Clicked.'
        example.disabled = true;
    });
*/
    /*
    example.addEventListener(
        'click', // this is the event type
        // when clicked, the code inside this arrow function will run
        () => { 
            console.log('Clicked Again.')  // the inner text of the element with id example will be changed to 'Clicked.'
            example.disabled = true;
        });

        const example1 = document.querySelector('#example1');
        example1.addEventListener(
            'click', 
            (event) => {
                console.log(event);
            })

        example1.click()
        example1.click()
        example1.click()
    */

/*
document
    .querySelector('#example')
    .addEventListener('click', () => {
        console.log('another click')
    })

// Logging a mouse scroll event:
window.addEventListener('scroll', () => {
    console.log('scrolled!')
})
*/
const backgrounds = [
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'orange',
    'pink',
    'brown',
    'silver',
    'gold',
    'khaki',
    'teal',
    'maroon',
]

const buttonList = document.querySelectorAll('button');
const buttonsArray = Array.from(buttonList);

/**
 * Returns a random color value, based on a random index
 * used on {@link backgrounds}
 * 
 * @returns {string} a random color value
 */
// To return different colors when the button is clicked:
const calcRandomColor = () => {
    const maxIndex = backgrounds.length -1;
    const randomIndex = Math.floor(Math.random() * maxIndex); // rounds it down to the nearest integer
    return backgrounds[randomIndex];
}

const handler = (event) => {
    const { target } = event; // gives the html node
    const { override } = target.dataset || {color: null};
    target.style.override = 'white';
    target.style.backgroundColor = override || calcRandomColor();
}

for (const button of buttonsArray) {
    button.addEventListener('click', handler);
}

