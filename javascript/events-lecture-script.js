// access the DOM:
// The # is for id

const example = document.querySelector('#example');
/*
// this is the event type
example.onClick = () => { 
    example.innerText = 'Clicked.' // the inner text of the element with id example will be changed to 'Clicked.'
    example.disabled = true
}
*/



example.addEventListener(
    'click', // this is the event type
    // when clicked, the code inside this arrow function will run
    () => { 
        example.innerText = 'Clicked.' // the inner text of the element with id example will be changed to 'Clicked.'
        example.disabled = true;
    });

    
    example.addEventListener(
        'click', // this is the event type
        // when clicked, the code inside this arrow function will run
        () => { 
            console.log('Clicked Again.')  // the inner text of the element with id example will be changed to 'Clicked.'
            example.disabled = true;
        });


document
    .querySelector('#example')
    .addEventListener('click', () => {
        console.log('another click')
    })

// Logging a mouse scroll event:
window.addEventListener('scroll', () => {
    console.log('scrolled!')

})


// To return different colors when the button is clicked:
const backgrounds = [
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'orange',
    'pink',
]

const buttonList = document.querySelectorAll('button');
const buttonsArray = Array.from(buttonList);

const calcRandomColor = () => {

}


console.log(buttonsArray);

const handler = () => {
    console.log('Clicked!');
}

for (const button of buttonsArray) {
    button.addEventListener('click', handler);
}