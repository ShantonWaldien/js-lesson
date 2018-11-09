// Whats a Condition?

// Sometimes we need to perform different actions based on a condition.

// There is the if statement for that and also the conditional (ternary) operator for conditional evaluation which we will be referring as the “question mark” operator ? for simplicity.

// Suppose we want to write a program that makes a user enter a number and then displays a message
// If the number is positive. Here is the corresponding algorithm


/* ===== Enter a number 
If the number is positive
Display Message === */


// The messsage should display only if the number is positive : this means its subject to a condition.

// We use the "If" statement


/******** Uncomment below *********/

// var number = Number(prompt("Enter a number:"));
// if (number > 0) {
//     console.log(number + " is positive");
// }

// Basic syntax:

// If (condition) {
    // Statements executed when the condition is true
// }


// The pair of opening and closing braces defines what is the called a block of code associated with an if statement. This statement represents a test. It can result in the following:"If the condition is true, then execute the instructions contained in the code block"

// The condition is always placed in parentheses after the if.

// Conditions

// A condition is an expression that evaluates whether something is true or false. When the value of a condition is true, we say that this condition is satisfied.

// We have already studied numbers and strings , two types of data in JavaScript. Booleans are another type. This type has two possible values:true and false.

// Any expression producing a boolean value(either true or false) can be used as a condition in an "if" statement. If the value of this expression is true, the code block associated with it is executed.

// Boolean expressions can be created using the comparison operators


// === Equal to
// !== Not equal to
// < Less than
// <= Less than or equal to
// > Greater than 
// >= Greater than or equal to

/******** Uncomment below *********/

// var age = Number(prompt("Enter your age:"));
// if (age < 18) {
//     alert(number + "No under 18s allowed");
// } else {                                  // Alternative conditions
//     alert(number + "Welcome!")
// }

// Nesting Conditions

// You can go next - level and display a specific message if the entered number is zero. Use "else if" for a second conditional. See this example, which has a psoitive test case, negative test case, and a last resort of the number being zero:

// var number = Number(prompt("Enter a number:"));
// if (number > 0) {
//     console.log(number + " is positive");
// } else if (number < 0) {
//     console.log(number + " is negative");
// } else {
//     console.log(number + " is zero");
// }
    /**************** Challenge *************/

    // Lets write a program that helps students decide what to wear based on the weather using "if" "else" or "else if" statement. Using weather conditions such as cloudy,windy,rainy,snowy,sunny.



var weather = prompt("What is the weather today?");
if (weather === "sunny") {
    console.log("Wear flip-flops, shorts and reflective white tshirt");
} else if (weather === "cloudy") {
    console.log("Wear jeans and thin hoodie/top");
} else if (weather === "windy") {
    console.log("Wear a jean and hoodie");
} else if (weather === "rainy") {
    console.log("Wear boots and water resistant jacket with jeans or trackpants");
} else if (weather === "snowy") {
    console.log("Wear thick warm clothing, cause its damn cold out there!");
} else {
    console.log("Invalid weather type or try using all lower caps");
}

