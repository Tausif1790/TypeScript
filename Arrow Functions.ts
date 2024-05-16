//--------------------->> Arrow Functions in TypeScript

// Introduction: Arrow functions provide a concise syntax to write functions and lexically bind the `this` context.

// First arrow function: Defining a simple arrow function
let greet = () => {
    console.log("Hello, world!");
};
greet(); // Hello, world!

// Explanation:
// First arrow function: The `greet` arrow function is a simple function that prints "Hello, world!" to the console.

// Passing Parameters: Defining an arrow function with parameters
let greetPerson = (name: string) => {
    console.log(`Hello, ${name}!`);
};
greetPerson("Alice"); // Hello, Alice!

// Explanation:
// Passing Parameters: The `greetPerson` arrow function takes a `name` parameter of type string and prints a greeting.

// Array of Arrow Functions: Defining an array of arrow functions
let operations: Array<(a: number, b: number) => number> = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b,
];

console.log(operations[0](5, 3)); // 8 (addition)
console.log(operations[1](5, 3)); // 2 (subtraction)
console.log(operations[2](5, 3)); // 15 (multiplication)
console.log(operations[3](5, 3)); // 1.6666666666666667 (division)

// Explanation:
// Array of Arrow Functions: The `operations` array contains four arrow functions for basic arithmetic operations. Each function takes two parameters and performs an addition, subtraction, multiplication, or division.

