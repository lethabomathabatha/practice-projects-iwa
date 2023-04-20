// for loop
// for (initialExpression; condition; incrementExpression)
// statement in curly bracket

for (let i = 1; i <= 5; i++) {
    // to display the odd numbers from 1 to 5
if (i % 2 !== 0) { 
    console.log(i)
}
}

for (let i = 5; i >= 1; i--) {
    // to display the odd numbers from 5 to 1
if (i % 2 !== 0) { 
    console.log(i)
}
}

// String primitive
const message = 'This is my \nfirst message';
console.log(message.length) 

console.log(message[0])
console.log(message[1])

console.log(message.includes('This'))
console.log(message.includes('name'))

console.log(message.startsWith('This'))
console.log(message.startsWith('this'))

console.log(message.endsWith('e'))
console.log(message.endsWith('ssage'))

console.log(message.indexOf('my'))
console.log(message.indexOf('first'))

console.log(message.replace('first', 'second'))

console.log(message)

console.log(message.toUpperCase())

console.log(message.trim())

console.log(message.split(''))


// Template literals
const message1 = 
'This is my\n' + 
'first message';

console.log(message1)

const name = 'Johnny';

const another1 = `Hi ${name}, ${20+2}
This is my
'first' message

Regards,
Lethabo`
console.log(another1)







// if else

// hour
// if hour is between 6am and 12pm: Good morning!
// if hour is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

// if (condition) {
//     statement to execute
// }

let hour = 10;


if (hour >= 6 && hour < 12) 
    console.log('Good morning!');
else if (hour >= 12 && hour < 18) 
    console.log('Good afternoon!')
else 
    console.log('Good evening!')









// String object
const another = new String('hey')

// While, do while loops
var n = 0;

while (n < 5) {
    n++;

    if (n == 3) continue; // continue is going to skip 3, break is just going to end the loop 
    console.log('n = ' + n);
}

var i = 0;

do {
    i++;
    console.log('i = ' + i);
} while (i < 5)
// &turn_off_js=true


// Higher Order Functions
function double(n) {
    return n * 2
}

console.log(double(n))

function hello (n) {
    return `Hello ${n}`
}
console.log(hello(n))

const names = [
    'Sina',
    'Sam',
    'Qoli',
    'Ben',
    'Zoe',
    'Quentin'
]

names.filter(function (n) {
    if(n[0] === 'Q') {
        return false
    }
    return true
})