/************ FUNCTIONS *****************/

// A function is a group of instruction that performs a particular task.

function sayHello () {
    console.log("Hello!");
}

console.log("Start of a program");
sayHello();
console.log("End of program");

// Declaring a function

// Creating a function is called declaration

/* ===

// Declaring  a function called myFunction 
function myFunction() {
    // Function actions
}

=== */

var user = prompt("Enter your name")
function greetingUser () {
    console.log("Hello " + user + "!")
}

console.log("Start of a program");
greetingUser();
console.log("End of program");

// The keyword "return" indicates that a return value will be given, which is specified immediately after the word.

function sayHello() {
    return "Hello!";
}

console.log("Start of program");
let result = sayHello();
console.log(result);
console.log("End of program");

// Declare myFunction
function myFunction() {
    // Calculate return value
    //  ..
    return returnValue;
}

// Get return value from myFunction
var value = myFunction();
// ..