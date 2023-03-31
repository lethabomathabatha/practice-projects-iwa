// number / string / boolean / null / undefined
// Type Coercion  Lecture Console:
/* 
const value = 123
console.log(value)
VM339:2 123
undefined
const value = 123
const mewValue = value.toString()
console.log(newValue)
VM498:3 Uncaught ReferenceError: newValue is not defined
    at <anonymous>:3:13
(anonymous) @ VM498:3
const value = 123
const newValue = value.toString()
console.log(newValue)
VM507:3 123
undefined
const value = 123
const newValue = value.toString()
console.log(typeof newValue)
VM543:3 string
undefined
const value = 123
const newValue = value.toString()
console.log(Value + 4)
VM578:3 Uncaught ReferenceError: Value is not defined
    at <anonymous>:3:13
(anonymous) @ VM578:3
const value = 123
const newValue = value.toString()
console.log(value + 4)
VM596:3 127
undefined
console.log('false'? 'a' : 'b')
VM685:1 a
undefined
console.log(false ? 'a' : 'b')

VM726:1 b
undefined
parseInt('123')
123
true.toString()
'true'
'true'.toString()
'true'
typeof NaN
'number'
Boolean('Hello')
true
Boolean('false')
true
Boolean(0)
false
Boolean('0')
true
Boolean (123)
true
Boolean('')
false
Boolean(' ')
true
0 == false
true
5 == false
false
-5 == false
false
const isLoggedIn = true
if (isLoggedIn === true) {
    console.log('Logged In')
}
VM1494:3 Logged In
undefined
const isLoggedIn = false
if (isLoggedIn === true) {
    console.log('Logged In')
}
undefined
const user = 'Lethabo'
if (user) {
    console.log('Logged In')
}
VM1648:3 Logged In
undefined
const user = ''
if (user) {
    console.log('Logged In')
}
undefined
const user = Boolean ('Lethabo')
if (user) {
    console.log('Logged In')
}
VM1770:3 Logged In
undefined
const user = null
const isLoggedIn = Boolean(user)
if (user) {
    console.log('Logged In')
}
undefined
const user = null

if (user) {
    console.log('Logged In')
}
undefined
typeof 0
'number'
const user = null
undefined
const user = undefined
undefined
const user = undefined
// checks user
if (typeof name === 'string') {
    user = name
} else {
    user = false
}

VM2429:4 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:4:10
(anonymous) @ VM2429:4
const user = 'Lethabo'
const age = 7

if (user && age) {
    console.log('valid')
}
VM2634:5 valid
undefined
const user = 'Lethabo'
const age = null

if (user && age) {
    console.log('valid')
}
undefined
const user = 'Lethabo'
const age = 23

if (user && age) {
    console.log('valid')
} else {
    console.log('Invalid')
}
VM2762:5 valid
undefined
const user = 'Lethabo'
const age = null

if (user && age) {
    console.log('valid')
} else {
    console.log('Invalid')
}
VM2782:7 Invalid
undefined
const user = 'Alu'
const age = 0

if (user && age) {
    console.log('valid')
} else {
    console.log('Invalid')
}
VM2814:7 Invalid
undefined
const user = 'Lethabo'
const age = 23

if (user && age) {
    console.log('valid')
} else if (age = 0) {
    console.log ('valid')
}
else  {
    console.log('Invalid')
}
VM2926:5 valid
undefined
const user = 'Alu'
const age = 0

if (user && age) {
    console.log('valid')
} else if (age = 0) {
    console.log ('valid')
}
else  {
    console.log('Invalid')
}
VM2963:6 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:6:16
(anonymous) @ VM2963:6
const user = 'Alu'
const age = 0

if (user && age) {
    console.log('valid')
} else if (age === 0) {
    console.log ('valid')
}
else  {
    console.log('Invalid')
}
VM2972:7 valid
undefined
10 % 3
1
const value = 9
const isEven = 9 % 0 === 0

    const columns = isEven ? 2 : 3
console.log(columns)
VM3294:5 3
undefined
const value = 9
const isEven = 9 % 2 === 0

    const columns = isEven ? 2 : 3
console.log(columns)
VM3302:5 3
undefined
const value = 9
const isEven = 9 % 2 === 0

    const columns = isEven ? true : false
console.log(columns)
VM3347:5 false
undefined
const value = 10
const isEven = value % 2 === 0

    const columns = isEven ? 2 : 3
console.log(columns)
VM3372:5 2
undefined
const isValid = true
const firstName = 'Lethabo'

if (isValid) {
    const surname = 'Valid'
} else { 
const surname = 'Invalid'
}
undefined
const isValid = true
const firstName = 'Lethabo'

if (isValid) {
    const surname = 'Valid'
    console.log(firstName, surname)
} else { 
const surname = 'Invalid'
}
VM3893:6 Lethabo Valid
undefined
const isValid = false
const firstName = 'Lethabo'

if (isValid) {
    const surname = 'Valid'
    console.log(firstName, surname)
} else { 
const surname = 'Invalid'
}
undefined
typeof [1,2,3]
'object'
*/