

/****** Challenge ********/


// Using objects and prototypes create 3 pizzas namely vegetarian, halaal, meaty.

//  Base - Thick or Thin
//  Type - Halaal, Meaty or Vegetarian
//  Layers
//  Toppings
//  Prices
//  Create a program that explains how the pizza is made or eaten


var Food = {

    // initialize the pastry

    init: function(type, base, toppings, layers, price) {
        this.type = type;
        this.base = base;
        this.toppings = toppings;
        this.layers = layers;
        this.price = price;
    },

    // Describe the pastry

    describe: function() {
        var description = "The " + this.type + " pizza" + " with a " + this.base + " base" + " has " + this.toppings + " for toppings, and consists of " + this.layers + " layer(s), and only costs " + this.price + ".";
        return description;
    }
};

var pizza1 = Object.create(Food);
pizza1.init("Meaty", "thick", "Tenderised Steak, Chicken, Bacon & Mushrooms with a Sweet & Sour sauce", 2,  "R180")

var pizza2 = Object.create(Food);
pizza2.init("Vegetarian", "thin", "3 cheeses namely Parmesan, Mozarella, Feta with salads and avocado", 1, "R150", )

var pizza3 = Object.create(Food);
pizza3.init("Halaal", "thick", "Halaal meat with macon", 1, "R120")

console.log(pizza1.describe());
console.log(pizza2.describe());
console.log(pizza3.describe());

/**** How the pizza is made! ****/

var pizza = {
    step1: "Lay down pizza base and spread tomato paste on base.",
    step2: " Put toppings on top of pizza.",
    step3: " Make sure it is evenly spread.",
    step4: " Then put the pizza in the wood fire oven till its well done. ",
    step5: " When pizza is done , take out and enjoy.",
    step6: " Pizza is best enjoyed with a nice cold craft beer",
};

console.log(pizza.step1 + pizza.step2 + pizza.step3 + pizza.step4 + pizza.step5 + pizza.step6);
