/***************** While Loops ***************/

//  A while loop lets you repeat code while a certain condition is true.

console.log("start of a program");
let number = 1;
while (number <= 1000) {
    console.log(number);
    number++;
}
console.log("end of program");

/* === 
while (condition) {
    // code to run while the condition is true
}

=== */

// Before each loop iteration , the condition in parentheses is evaluated to determine whether its true or not. The code associated with a loop is called its body.

// If the conditions is true, the code in the while loop's body runs. afterward, thr condition is re-evaluated to see if its still true or not. The cycle continues.

// If the condition is false, the code in the loop stop running or doesnt run .

/* ===================== For Loop ===================== */

// Youll often need to write loops with conditions that  are based on what happens in the loop body , like in our example. JavaScript offers another loop type to account for this: the for loop.

/* ===

for  (initialization; condition; final - expression) {
    // code to run when condition is true
}

=== */

//  This is a little mkre complicated than while loop syntax :

// Initialization only happens once, when the code first kicks off.

//  The condition is evaluated once before the loop runs each time. If its true . If not, the code doesnt run.

// The final expression is evaluated after the loop runs each time. Its often used to update a counter variable, as we saw in the while loop example.

for (var counter = 1; counter <= 5; counter++) {
    console.log(counter)
}


/******** which loop should i use ? ***********/

let letter = "";
while (letter !== "X") {
    letter = prompt("Type any letter or X to exit:");
    console.log(letter);
}