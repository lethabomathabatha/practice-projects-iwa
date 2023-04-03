// Strings and Logical Operators Lecture Console:
// concactenation / interpolation / switch statements

/* 
const first =1 
const second = 2;
console.log(`first + second`)
VM1112:3 first + second
undefined
const first =1 
const second = 2;
console.log("first + second")
VM1214:3 first + second
undefined
const first =1 
const second = 2;
console.log(`${first} ${second}`)
VM1284:3 1 2
undefined
// for numbers, not strings
const first =1 
const second = 2;
console.log(`${first} ${second}`)
VM1397:4 1 2
undefined
const name = "Lethabo"

console.log("Hello there, " + name)
VM1552:3 Hello there, Lethabo
undefined
const name= "Lethabo"

console.log(`Hello there, ${name}`)
VM1769:3 Hello there, Lethabo
undefined
const name= "Lethabo"

console.log(`Hello there,${name}`)
VM1788:3 Hello there,Lethabo
undefined
const firstName = "Schalk"
const surname = "Venter"

console.log(`Hello there, ${`Mr. ${surname} ${firstName}`}`) 
VM2119:4 Hello there, Mr. Venter Schalk
undefined
const firstName = "Schalk"
const surname = "Venter"

console.log(`Hello there, ` ${`Mr. ${surname} ${firstName}`}) 
VM2139:4 Uncaught SyntaxError: missing ) after argument list
const firstName = "Schalk"
const surname = "Venter"
const tile = `Mr. ${surname}, ${firstName}`

console.log(`Hello there, ${title}`) 
VM2296:5 Uncaught ReferenceError: title is not defined
    at <anonymous>:5:29
(anonymous) @ VM2296:5
const firstName = "Schalk"
const surname = "Venter"
const tile = `Mr. ${surname} ${firstName}`

console.log(`Hello there, ${title}`) 
VM2318:5 Uncaught ReferenceError: title is not defined
    at <anonymous>:5:29
(anonymous) @ VM2318:5
const active = false
let user = "Lethabo"

if (active !== true) {
    user = null

}

console.log(usr)
VM2608:9 Uncaught ReferenceError: usr is not defined
    at <anonymous>:9:13
(anonymous) @ VM2608:9
const month = "April"

if (month === "March" || month === "April" || month === "May") {
   console.log("Autumn")
} else if (month === "June" || month === "July" || month === "August") {
   console.log("Winter")
} else if (month === "September" || month === "October" || month === "November") {
   console.log("Spring")
}
else if (month === "December" || month === "January" || month === "February") {
   console.log("Summer")
}
else {
    throw new Error ("Invalid Month")
}

VM3539:4 Autumn
undefined
const month = "Decemberr"

if (month === "March" || month === "April" || month === "May") {
   console.log("Autumn")
} else if (month === "June" || month === "July" || month === "August") {
   console.log("Winter")
} else if (month === "September" || month === "October" || month === "November") {
   console.log("Spring")
}
else if (month === "December" || month === "January" || month === "February") {
   console.log("Summer")
}
else {
    throw new Error ("Invalid Month")
}
VM3578:14 Uncaught Error: Invalid Month
    at <anonymous>:14:11
(anonymous) @ VM3578:14
const month = "November"

if (month === "March" || month === "April" || month === "May") {
   console.log("Autumn")
} else if (month === "June" || month === "July" || month === "August") {
   console.log("Winter")
} else if (month === "September" || month === "October" || month === "November") {
   console.log("Spring")
}
else if (month === "December" || month === "January" || month === "February") {
   console.log("Summer")
}
else {
    throw new Error ("Invalid Month")
}
VM3604:8 Spring
undefined
const month = "April"

if (month === "March" || month === "April" || month === "May") {
   console.log("Autumn")
}  
if (month === "June" || month === "July" || month === "August") {
   console.log("Winter")
} 
if (month === "September" || month === "October" || month === "November") {
   console.log("Spring")
}
if (month === "December" || month === "January" || month === "February") {
   console.log("Summer")
}

VM3636:4 Autumn
undefined
const month = "April"

if (month === "March" || month === "April" || month === "May") {
   console.log("Autumn")
} else if (month === "June" || month === "July" || month === "August") {
   console.log("Winter")
} else if (month === "September" || month === "October" || month === "November") {
   console.log("Spring")
}
if (month === "December" || month === "January" || month === "February") {
   console.log("Summer")
}
else {
    throw new Error ("Invalid Month")
}
VM3652:4 Autumn
VM3652:14 Uncaught Error: Invalid Month
    at <anonymous>:14:11
(anonymous) @ VM3652:14
const month = "April"

if (month === "March" || month === "April" || month === "May") {
   console.log("Autumn")
}
if (month === "June" || month === "July" || month === "August") {
   console.log("Winter")
} 
if (month === "September" || month === "October" || month === "November") {
   console.log("Spring")
}
if (month === "December" || month === "January" || month === "February") {
   console.log("Summer")
}
else {
    throw new Error ("Invalid Month")
}
VM3674:4 Autumn
VM3674:16 Uncaught Error: Invalid Month
    at <anonymous>:16:11
(anonymous) @ VM3674:16
const month = "April"

switch (month) {
    case "March"

if (month === "March" || month === "April" || month === "May") {
   console.log("Autumn")
} 
if (month === "June" || month === "July" || month === "August") {
   console.log("Winter")
} 
if (month === "September" || month === "October" || month === "November") {
   console.log("Spring")
}
if (month === "December" || month === "January" || month === "February") {
   console.log("Summer")
}

VM3799:6 Uncaught SyntaxError: Unexpected token 'if'
const month = "April"

switch (month) {
    case "March"
    case "April"
    case "May"
    case "June"
    case "July"
        case "August"
        
if (month === "March" || month === "April" || month === "May") {
   console.log("Autumn")
} 
if (month === "June" || month === "July" || month === "August") {
   console.log("Winter")
} 
if (month === "September" || month === "October" || month === "November") {
   console.log("Spring")
}
if (month === "December" || month === "January" || month === "February") {
   console.log("Summer")
}
VM3956:5 Uncaught SyntaxError: Unexpected token 'case'
const month = "April"

switch (month) {
    case "March": console.log("Autumn"); break;
    case "April" : 
    case "May" :
    case "June" :  console.log("Winter"); break;
    case "July" :
    case "August" :
    case "September" : console.log("Spring"); break;
    case "October" :
    case "November" :
    case "December" :  console.log("Summer"); break;
    case "January" :
    case "February" :
}
        

VM4537:7 Winter
undefined
const month = "February"

switch (month) {
    case "March": console.log("Autumn"); break;
    case "April" : 
    case "May" :
    case "June" :  console.log("Winter"); break;
    case "July" :
    case "August" :
    case "September" : console.log("Spring"); break;
    case "October" :
    case "November" :
    case "December" :  console.log("Summer"); break;
    case "January" :
    case "February" :
}
undefined
const month = "July"

switch (month) {
    case "March": console.log("Autumn"); break;
    case "April" : 
    case "May" :
    case "June" :  console.log("Winter"); break;
    case "July" :
    case "August" :
    case "September" : console.log("Spring"); break;
    case "October" :
    case "November" :
    case "December" :  console.log("Summer"); break;
    case "January" :
    case "February" :
}
VM4634:10 Spring
undefined
const month = "April"

switch (month) {
    case "March": console.log("Summer"); break;
    case "April" : 
    case "May" :
    case "June" :  console.log("Autumn"); break;
    case "July" :
    case "August" :
    case "September" : console.log("Winter"); break;
    case "October" :
    case "November" :
    case "December" :  console.log("Spring"); break;
    case "January" :
    case "February" :
}
VM4726:7 Autumn
undefined
const month = "Aprul"

switch (month) {
    case "March": console.log("Summer"); break;
    case "April" : 
    case "May" :
    case "June" :  console.log("Autumn"); break;
    case "July" :
    case "August" :
    case "September" : console.log("Winter"); break;
    case "October" :
    case "November" :
    case "December" :  console.log("Spring"); break;
    case "January" :
    case "February" :

    default: throw new Error ("Invalid Month")
}
VM4853:17 Uncaught Error: Invalid Month
    at <anonymous>:17:20
(anonymous) @ VM4853:17
const firstName = "Lethabo"
const age = 23
const isValid = firstName && age

if (isValid) {
    console.log("Valid to the max!")
}
VM5163:6 Valid to the max!
undefined
const firstName = "Lethabo"
const age = 23
const isValid = firstName && age

console.log(isValid)

if (isValid) {
    console.log("Valid to the max!")
}
VM5252:5 23
VM5252:8 Valid to the max!
undefined
const firstName = "Lethabo"
const age = 23
const isValid = firstName && age

console.log(isValid)
// if the value before && is true then it proceeds to the next value
// if the value before || is false then it proceeds to the next value

if (isValid) {
    console.log("Valid to the max!")
}
VM5252:5 23
VM5557:12 Uncaught SyntaxError: Unexpected number
const firstName = "Lethabo"
const age = 23
const isValid = firstName && age

console.log(isValid)
// if the value before && is true then it proceeds to the next value
// if the value before || is false then it proceeds to the next value

if (isValid) {
    console.log("Valid to the max!")
}
VM5561:5 23
VM5561:10 Valid to the max!
undefined
const firstName = "Lethabo"
const age = 23
const isValid = firstName || age

console.log(isValid)
// if the value before && is true then it proceeds to the next value
// if the value before || is false then it proceeds to the next value

if (isValid) {
    console.log("Valid to the max!")
}
VM5590:5 Lethabo
VM5590:10 Valid to the max!
undefined

*/

// null coalesce / ?? (Nullish Coalescing)
