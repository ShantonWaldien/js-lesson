
// OBJECTS & PROTOTYPES

// In addition to its special properties, every JavaScript object has an internal property called prototype. This is a link (known as a reference) to another object. When trying to access a property that does not exist in an object JavaScript tries to find this property in the prototype of this object.

var anObject = {
    a: 2
};

// Create anotherObject using anObject as a prototype
var anotherObject = Object.create(anObject);

console.log(anotherObject.a) // Will show 2

// The JavaScript statement Object.create() is used to create objectanotherObject based on the prototype object anObject.

// If the prototype of an object does not have a desired property, then research continues in its own prototype until we get to the end of prototype chain. If the property was found in objects, access returns the value undefined.

var anObject = {
    a: 2
};

// Create anotherObject using anObject as a prototype
console.log(anotherObject.b) // Will be undefined

// This type of relationship between JavaScript objects is called delegation: an object delegates part of its operation to its prototype.

// Cake Prototype

var Pastry = {
    type: "",
    flavor: "",
    layers: 0,
    price: "",
    occasion: "",

    // Describe the pastry
    describe: function() {
        var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.layers + " layer(s), and costs " + this.price + ".";
        return description
    }
}; 

var muffin = Object.create(Pastry);
muffin.type = "muffin";
muffin.flavor = "blueberry";
muffin.layers = 1;
muffin.price = "R20";
muffin.occasion = "breakfast";

var cake = Object.create(Pastry);
cake.type = "cake";
cake.flavor = "vanilla";
cake.layers = 3;
cake.price = "R310";
cake.occasion = "birthday";

console.log(muffin.describe());
console.log(cake.describe());

// We ceated an object named pastry, which brings together the properties common to all the characters. The cake and muffin are created via Pastry as a prototype which delegates its features to them.

