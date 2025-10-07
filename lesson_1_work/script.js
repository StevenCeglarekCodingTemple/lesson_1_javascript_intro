console.log("Hello from the browser!");

// Our first JavaScript code!
console.log("Hello from JavaScript!");
console.log("This is our first JavaScript program!");
console.log("We're learning JavaScript basics today!");

// Variable declarations
let newName = "Alice";        // Can be reassigned
const age = 38;               // Cannot be reassigned
var oldStyle = "Avoid This";  // Old way, avoid in modern JS

// Data Types
let text = "Hello String";     // String
let number = 42;               // Number
let isStudent = true;          // Boolean
let nothing = null;            // Null
let notDefined;                // Undefined

console.log(typeof text);
console.log(typeof number);
console.log(typeof isStudent);


let person1 = {
    "firstName": "Steven",
    "lastName": "Ceglarek"
};

console.log(person1);
console.log(person1['firstName'])
console.log(person1.firstName)

number = 6;

// String

let text2 = "Hello World";
let singleQuote = 'Hello World';
let template = `Hello World ${text2}`;  // Template Literal

// Number (no separate int/float like Python)
let integer = 42;
let anotherNum = 3.14;
let scientific = 1e6; // 1,000,000

// Boolean
let isTrue = true;
let isFalse = false;

// Null (intentional absence of value)
let nothing1 = null;

// Undefined (variable declared but not assigned)
let noAssigned;

// Symbol
let unique = Symbol('id')
console.log(unique)

// Check data types
console.log(typeof "Hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof null);        // "object" (JavaScript quirk!)
console.log(typeof undefined);   // "undefined"


// Good variable names
let firstName = 'Alice';
let user_age1 = 25;
let $price = 19.99;
let _private = 'internal';

// Bad variable names
// let 2name = 'Bob';            // Cannot start with numbers
// let let = 'keyword';          // Cannot use reserved words/ keywords
// let first-name = 'Alice';     // Cannot use hyphens

// Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b);    // 13 (addition)
console.log(a - b);    // 7 (subtraction)
console.log(a * b);    // 30 (multiplication)
console.log(a / b);    // 3.3333... (division)
console.log(a % b);    // 1 (remainder/modulo)
console.log(a ** b);   // 1000 (exponentiation)
console.log(++a);      // 11 (pre-increment)
console.log(a++);      // 11 (post-increment, then becomes 12)

// Comparison Operators

let x = 5;
let y = '5';

// Loose equality (type coercion)
console.log(x == y);    // true (converts type)
console.log(x != y);    // false

// Strict equality (no type coercion)
console.log(x === y);   // false (different types)
console.log(x !== y);   // true

// Other comparisons
console.log(x > 3);    // true
console.log(x < 10);   // true
console.log(x >= 5);   // true
console.log(x <= 5);   // true


// Logical Operators
let isStudent1 = true;
let hasJob = false;
let age3 = 20;

// Logical AND
console.log(isStudent1 && age3 > 18);    // true

// Logical OR
console.log(isStudent1 || hasJob);      // true

// Logical NOT
console.log(!hasJob);                   // true


let newFirstName = 'Jerry';
let newLastName = 'Smith';

// Concatenation
let fullName = newFirstName + " " + newLastName;
console.log(fullName);

// Template literals (like Pythons f-strings)
let greeting = `Hello my name is ${fullName}`;
console.log(greeting);

// String methods
let message = 'Hello World';
console.log(message.length);           // 11
console.log(message.toUpperCase());    // 'HELLO WORLD'
console.log(message.toLowerCase());    // 'hello world'
console.log(message.substring(0, 5));  // 'hello'
console.log(message.indexOf("World")); // 6


// Console methods
console.log("Regular Message");
console.warn("Warning Message");
console.error("Error Message");
console.info("Info Message");

// Multiple values
let anotherName = "Joseph";
let anotherAge = 50;
console.log("Name: ", anotherName, "Age: ", anotherAge);

// Object Logging
let person = {thisName: 'Franklin', thisAge: 22};
console.log("Person Object:", person);
console.table(person); // Nice table format

// Grouping
console.group("User Information");
console.log("Name:", anotherName);
console.log("Age:", anotherAge);
console.groupEnd();


// Debugging Techniques
console.log("Step 1: Starting calclation....");
let t = 10;
console.log("Step 2: t =", t);

let g = 9;
console.log("Step 3: g =", g);

let result = t + g;
console.log("Step 4: result =", result);

// 2. User console.assert for testing
console.assert(result === 19, "Addition should equal 19");



// Create variables for your information
let firstName6 = "Your Name";
let lastName6 = "Your Last Name";
let age6 = 25;
let city = "Your City";
let isStudent6 = true;

// Display information using different methods
console.log("=== Personal Information ===");
console.log("Name:", firstName6, lastName6);
console.log("Age:", age6);
console.log("City:", city);
console.log("Student:", isStudent6);

// Use template literals
let info = `I am ${firstName6} ${lastName6}, ${age6} years old, living in ${city}`;
console.log("Formatted:", info);


// Create a simple calculator
let num1 = 15;
let num2 = 7;

// Perform operations
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;

// Display results
console.log("=== Calculator Results ===");
console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${difference}`);
console.log(`${num1} * ${num2} = ${product}`);
console.log(`${num1} / ${num2} = ${quotient}`);
console.log(`${num1} % ${num2} = ${remainder}`);


// String manipulation practice
let sentence = "JavaScript is awesome!";
let name = "Alice";

// Basic operations
console.log("Original:", sentence);
console.log("Length:", sentence.length);
console.log("Uppercase:", sentence.toUpperCase());
console.log("Lowercase:", sentence.toLowerCase());

// Replace and concatenate
let personalized = sentence.replace("JavaScript", name);
console.log("Personalized:", personalized);

// Template literal with calculations
let year = 2024;
let birthYear = 1995;
let newAge = year - birthYear;
let newMessage = `${name} is ${newAge} years old in ${year}`;
console.log("Age message:", newMessage);