// get the elements by ID and class
const heading = document.getElementById("heading");
const text = document.querySelector(".text");
const hello = document.querySelector(".hello");

// change the styles using CSSOM
heading.style.color = "red";
text.style.fontSize = "24px";


// change the styles using DOM
hello.style.fontSize = "40px";
hello.style.color = "gold";

// Although there is virtually no difference between the CSSOM and DOM methods in this specific example,
// "changing the style of an element using the DOM directly will modify the inline styles of the element, 
// which can override any styles defined in an external CSS file or stylesheet.