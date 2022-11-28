var personalDetails = {
    name: "Den Odell",
    email: "den.odell@me.com"
};

console.log(Object.isExtensible(personalDetails)); // true

Object.preventExtensions(personalDetails);

console.log(Object.isExtensible(personalDetails)); // false 

personalDetails.age = 35; // throws exception

Object.getOwnPropertyDescriptor(personalDetails, "name");

Object.defineProperty(personalDetails, "age", {
    value: 35,
    writable: false,
    enumerable: true,
    configurable: true
});

Object.defineProperty(personalDetails, {
    age: {
        value: 35,
        writable: false,
        enumerable: true,
        configurable: true
    },
    town: {
        value: "London",
        writable: true
    }
});

keys = Object.keys(personalDetails);
console.log(keys.join(", "));


// create a duplicate of an object
fathersDetails = Object.create(personalDetails);
fathersDetails.name = "John";