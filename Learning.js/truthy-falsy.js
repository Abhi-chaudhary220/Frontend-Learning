// ===== TRUTHY AND FALSY VALUES IN JAVASCRIPT =====

// FALSY VALUES - These evaluate to false in a boolean context
// There are exactly 6 falsy values in JavaScript:

console.log("===== FALSY VALUES =====");

// 1. false - the boolean value false
console.log(Boolean(false)); // false

// 2. 0 - the number zero
console.log(Boolean(0)); // false

// 3. -0 - negative zero
console.log(Boolean(-0)); // false

// 4. "" - empty string
console.log(Boolean("")); // false

// 5. null - represents no value
console.log(Boolean(null)); // false

// 6. undefined - represents an undefined value
console.log(Boolean(undefined)); // false

// 7. NaN - Not a Number
console.log(Boolean(NaN)); // false

console.log("\n===== TRUTHY VALUES =====");

// Everything else is TRUTHY. Examples:

// Non-zero numbers
console.log(Boolean(1)); // true
console.log(Boolean(-5)); // true
console.log(Boolean(0.5)); // true

// Non-empty strings
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true (string, not boolean)
console.log(Boolean("0")); // true (string containing 0)

// Objects (including arrays and functions)
console.log(Boolean({})); // true (empty object)
console.log(Boolean([])); // true (empty array)
console.log(Boolean(function() {})); // true (function)

// Symbols
console.log(Boolean(Symbol())); // true

console.log("\n===== PRACTICAL EXAMPLES =====");

// Using truthy/falsy in conditionals
let user = "John";

if (user) {
    console.log("User exists: " + user); // This will execute
}

let email = "";

if (!email) {
    console.log("Email is empty"); // This will execute
}

// Using truthy/falsy with logical operators
let username = "";
let defaultName = "Guest";
let name = username || defaultName;
console.log(name); // "Guest" (because username is falsy)

// Array length check
let items = [];

if (items.length) {
    console.log("Items exist");
} else {
    console.log("No items"); // This will execute
}

// Object check
let person = {};

if (Object.keys(person).length) {
    console.log("Person has properties");
} else {
    console.log("Person is empty"); // This will execute
}

console.log("\n===== COMMON PITFALLS =====");

// Pitfall 1: String "0" is truthy
if ("0") {
    console.log('"0" is truthy'); // This executes!
}

// Pitfall 2: Empty array is truthy
if ([]) {
    console.log("Empty array is truthy"); // This executes!
}

// Pitfall 3: Empty object is truthy
if ({}) {
    console.log("Empty object is truthy"); // This executes!
}

// Pitfall 4: Comparing with loose equality
console.log(0 == false); // true (loose equality)
console.log(0 === false); // false (strict equality)

console.log("" == false); // true (loose equality)
console.log("" === false); // false (strict equality)
