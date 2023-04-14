// Function Expressions

// what happens if we move the console.logs up before they are even created?
// we get the error: cannot access before initialization
// console.log(example1())
// console.log(example2())
// console.log(example3())
// console.log(example4())

// However, console.logging the last example actually logs. Why?
// Hoisting. Cool, but rather skip this practice.
console.log(example4())

// Function-overloading and hoisting e.g:
// console.log(example3())
// the result of this is example 4 not being accessible, as it is overridden
// an alert, for example, can be overridden if a function called 'alert' was used



// multi-line, arrow function expression
const example1 = () => {
    return 123
}
console.log(example1())



// Traditional Function Expression
// if it all fits on a single line, eliminate curly brackets and "return"
const example2 = () => 4 * 5
console.log(example2())


// different method, using function keyword
const example3 = function () {
    return 5334
}
console.log(example3())

// Function Declaration
// you give the function a name
function example4 () {
    return 94
}
console.log(example4())


// using 'this'
// re-binding 'this' to parent object
// "in the code below, 'value' is a property of the 'counter' object, 
// so when we use 'this.value', it refers to the 'value' property of the object."
// removing 'this' would make 'value' a variable with a global scope, instead of 
// being the property of the 'counter' object
const counter = {
    value: 120,

    add: function () {
        this.value = this.value + 1
    },

    minus: function () {
        this.value = this.value - 1
    }
    
}

counter.add.call(counter)
counter.add.call(counter)
counter.add.call(counter)
counter.minus.call(counter)
console.log(counter.value) 

//
const counter1 = {
    value: 120,
    toAdd: [10, 15, 3],

// the 'add' function loops through each number in the toAdd array 
// and adds it to the value property of the counter1 object.
     add: function () {
        const handler = (item) =>{
            this.value = this.value + item
        }
        this.toAdd.forEach(handler)
        }
}
// item is a parameter of the handler function. The handler function
// is called for each element of the toAdd array using the forEach method.
console.log(counter1.value)
counter1.add()
console.log(counter1.value)


// Recursion

// define a recursive function called "example5" that takes one parameter called "value5"
const example5 = (value5) => {
    const innerValue5 = value5 + 1 // create a new variable "innerValue5" that's the value of "value5" plus one

 // if "value5" is less than 20, call "example5" recursively with "innerValue5" as the argument
    if (value5 < 20) {
        return example5(innerValue5)
    } else {
         // otherwise, return the value of "innerValue5"
        return innerValue5
    }
}


// call "example5" with an initial value of 1 and store the result in a variable called "result"
const result = example5(1)

// output the value of "result" to the console
console.log(result)
