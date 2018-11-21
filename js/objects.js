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

// let cake = {
//     flavour: "Soft & moist Chocolate mousse",
//     toppings: "Kit kat, Cadbury whispers & m&m's. ",
//     frosting: "whipped, not blended ,melted bar-one dripping down the side. ",
//     center: "Lindt caramel gushes out.",
//     layers: "3 chocolate mousse on 1 vanilla.",
//     price: "R350."
// };

// console.log("The cake I am offering is a " + cake.flavour + " cake." + " That is topped with " + cake.toppings + "The frosting surrounding it is " + cake.frosting  + "Once the knife penetrates the cake, " + cake.center + "The layers the cake consists of is " + cake.layers + "  All this for " + cake.price);

// // The price is actually R800 !
// cake.price = "R800";

// console.log("The cake I am offering is a " + cake.flavour + " cake." + " That is topped with " + cake.toppings + "The frosting surrounding it is " + cake.frosting  + "Once the knife penetrates the cake, " + cake.center + "The layers the cake consists of is " + cake.layers + "  All this for " + cake.price);



// // Methods on objects

// // We had to write lengthy console.log statements each time to show the cake description. Theres a cleaner way to accomplish this.

// //  Adding a method to an Object

// // Describe a cake


// function describe(cake) {
//     var description = "The " + cake.flavour + " cake has toppings of " + cake.toppings +  " The layers it consists of is " + cake.layers + " It only costs " + cake.price + ".";
//     return description;
// }

// console.log(describe(cake));

// The function describe() takes an object as a  parameter. We pass it the cake, and it accesses that objects properties and prints them out in that sentence.

// Now for an alternative approach: creating a describe property that houses a method.

let cake = {
    flavor: "sweet-vanilla & caramel",
    layers: 5,
    price: "R300",
    occasion: "birthday",

    // Describe the cake
    describe: function() {
        var description = "The " + this.occasion + " cake has a " + this.flavor + " flavor, " + this.layers + " layers, and costs " + this.price + ".";
        return description;
    }
};

console.log(cake.describe());

// The cake is actually for a wedding !
cake.occasion = "wedding";

// Now our object has  a new property available to it describe. The value of this property is a function that returns a text description of the cake.

// A property whose value is a function is called a method.

/* ===

Remember the parentheses, even if empty, when calling a method!

=== */

