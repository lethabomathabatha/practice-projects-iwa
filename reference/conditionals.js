// conditionals lecture
/*
console.log('test')
VM122:1 test
undefined
if (1 === 1) { console.log( 'test') }
VM222:1 test
undefined
if (1 === 2) { console.log( 'test') } 
else { console.log ('not true') }
VM408:2 not true
undefined
1 === 1? console.log('test) : console.log('not true')
VM548:1 Uncaught SyntaxError: missing ) after argument list
1 === 2? console.log('test) : console.log('not true')
VM612:1 Uncaught SyntaxError: missing ) after argument list
1 === 2? console.log('test) : console.log('not true'))
VM651:1 Uncaught SyntaxError: missing ) after argument list
1 === 2? console.log('test') : console.log('not true')
VM717:1 not true
undefined
console.log (1 === 1 ? 'test' : 'not true')
VM891:1 test
undefined
let value;
undefined
let value; if (1 ===2 ) { let = 'a'} else {let = 'b'} cons
VM1056:1 Uncaught ReferenceError: cons is not defined
    at <anonymous>:1:55
(anonymous) @ VM1056:1
let value; if (1 ===2 ) { value = 'a'} else {value = 'b'} console.log (value)
VM1172:1 b
undefined
let value = 1 === 1 ? 'a' : 'b' if (1 === 1) { value = 'a'} else { value = 'b'} console.log(value)
VM1400:1 Uncaught SyntaxError: Unexpected token 'if'
let value = 1 === 1 ? 'a' : 'b' 
    if (1 === 1) { 
        value = 'a'
    } else { 
        value = 'b'
    } console.log(value)
VM1449:6 a
undefined
console.log ( 1 === 1 && 5 === 5 ? 'test' : 'not true')
VM1665:1 test
undefined
cons
VM1678:1 Uncaught ReferenceError: cons is not defined
    at <anonymous>:1:1
(anonymous) @ VM1678:1
console.log ( 1 === 1 && 5 === 4 ? 'test' : 'not true')
VM1709:1 not true
undefined
console.log ( 1 === 2 && 5 === 4 ? 'test' : 'not true')
VM1744:1 not true
undefined
const result = (1 === 1 && 5 === 4) 
undefined
const result = (1 === 1 && 5 === 4) 
console.log (result)
VM1890:2 false
undefined
const result = (1 === 1 && 5 === 4)
console.log (result === true ? 'a' : 'b')
VM2071:2 b
undefined
const result = (1 === 1 || 5 === 4) 
console.log (result === true ? 'a' : 'b')
VM2237:2 a
undefined
if (1===1 || 4 ===5) {
    console.log('a')
} else { console.log('b')
       }
VM2402:2 a
undefined
if (1===1 && 4 ===5) {
    console.log('a')
} else { console.log('b')
       }
VM2414:3 b
undefined
const first = 1 === 1
const second = 4 === 5

console.log(first, second)

if (first || second ) {
    console.log('a')
} else { console.log('b')
       }
VM2745:4 true false
VM2745:7 a
undefined
const first = 1 === 1
const second = 4 === 5
const third = first && second

console.log(first, second, third)

if (third ) {
    console.log('a')
} else { console.log('b')
       }
VM2895:5 true false false
VM2895:9 b
undefined
const first = 1 !== 1
const second = 4 !== 5
const third = first && second

console.log(first, second, third)

if (third ) {
    console.log('a')
} else { console.log('b')
       }
VM2909:5 false true false
VM2909:9 b
undefined
const first = 1 !== 3
const second = 4 !== 5
const third = first && second

console.log(first, second, third)

if (third ) {
    console.log('a')
} else { console.log('b')
       }
VM2935:5 true true true
VM2935:8 a
undefined
const user = 'John'
const permissions = user === 'John' ? 'admin' : 'no permissions'
undefined
const user = 'John'
const permissions = user === 'John' ? 'admin' : 'no permissions'
console.log ( permissions )
VM3192:3 admin
undefined
const user = 'John'
const status = 'hacked'

const isAdmin = user === 'John' && status !== 'hacked'
const permissions = isAdmin ? 'admin' : 'no permissions'
console.log ( permissions )
VM3392:6 no permissions
undefined
const user = 'John'
const status = 'active'

const isAdmin = user === 'John' && status !== 'hacked'
const permissions = isAdmin ? 'admin' : 'no permissions'
console.log ( permissions )
VM3415:6 admin
undefined
*/