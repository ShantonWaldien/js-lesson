// What is an object ?


// Think about objects in the non - programming sense, like a pen. A pen can have different ink colors, be manufactured by different people, have a different tip, and many other properties.

//  Similarly, an object in programming is an entity that has properties. Each property defines a characteristic of the object. A property can be information associated with the object( the color of the pen) or action (the pens ability to write).

// What does this have to do with code?

// Object -  oriented programming (OOP for short) is a way to write programs using objects. When using OOP, you write, create, and modify objects, and the onjects ,make up your program.

// OOP changes the way a program is written and organized. So far, youve been writing function based code, sometimes called procedural programming. Now lets discover how - to write object oriented code.

// JavaScript and objects

// Like many other languages, JavaScript involves programming objects, so we can say its an object - oriented language. It provides a number of predefined objects while also creating your own.

// Creating an object
// Here is the JavaScript representation of a blue bic ballpoint pen.

let pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};

/* ===

Create a new onbject in JavaScript by setting its properties within a pair of curly braces : {...
};

=== */

// The above code defines a variable named pen whose value is an object: you can therefore say pen is an object. This object has three properties: type, color and brand. Each property has a name and a value and is seperated by a comma, (except the last one).

// Getting a value

// After creating the object, you can access the value of its properties using dot notation such as myObject.myProperty. Such as below:

console.log(pen.type)
console.log(pen.color)
console.log(pen.brand)

// Since you know how to access properties , you can start combining them with other elements, like strings as part of a sentence.
// Create a sentence using concatenation.

console.log( "I use a " + pen.type + " pen" + " that has the color " + pen.color + " the brand which it comes from is " + pen.brand + ".");



/* ===
Lets create a cake in JavaScript that has several properties:

flavor, like vanilla, chocolate, etc 

price in madibas

layers(1, 2, 3 .. 10 ? !)

=== */

let cake = {
    flavour: "Soft & moist Chocolate mousse",
    toppings: "Kit kat, Cadbury whispers & m&m's. ",
    frosting: "whipped, not blended ,melted bar-one dripping down the side. ",
    center: "Lindt caramel gushes out.",
    layers: "3 chocolate mousse on 1 vanilla.",
    price: "R350."
};

console.log("The cake I am offering is a " + cake.flavour + " cake." + " That is topped with " + cake.toppings + "The frosting surrounding it is " + cake.frosting  + "Once the knife penetrates the cake, " + cake.center + "The layers the cake consists of is " + cake.layers + "  All this for " + cake.price);

// The price is actually R800 !
cake.price = "R800";

console.log("The cake I am offering is a " + cake.flavour + " cake." + " That is topped with " + cake.toppings + "The frosting surrounding it is " + cake.frosting  + "Once the knife penetrates the cake, " + cake.center + "The layers the cake consists of is " + cake.layers + "  All this for " + cake.price);

