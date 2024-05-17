//--------------------->> Variable Prefixes in TypeScript

//--------------------->> var:
for(var i=0;1<10;i++){
    console. log(i);
}
console.log(i);

//--------------------->> let: Declaring a variable with block scope
for(let j=0;1<10;j++){
    console. log(j);
}
//console.log(j);         // error outside the scope

// Ex 2.
let age2 = 30;
if (true) {
    let age2 = 25;
    console.log(age2); // 25
}
console.log(age2); // 30

// Explanation:
// let: The `let` keyword declares a variable with block scope. Inside the if block, `age` is 25, while outside it is 30.

//--------------------->> const: Declaring a constant variable
const birthYear = 1990;
// birthYear = 1991;       // compile error
console.log(birthYear); // 1990

// Explanation:
// const: The `const` keyword declares a constant variable whose value cannot be changed. `birthYear` is set to 1990 and remains unchanged.

//--------------------->> const functions: Defining a constant function
const greet2 = () => {
    console.log("Hello, world!");
};

// we cannot change implementation of greet2 function with const key work but we can do this uing var
// greet2 = () => {
//     console.log("Hello, sun!");
// };

greet2(); // Hello, world!

// Explanation:
// const functions: The `greet` function is defined as a constant using an arrow function. It prints "Hello, world!" to the console.

//--------------------->> declare: Declaring a variable without initializing it
declare let someVar: string;
someVar = "This is a string";
console.log(someVar); // This is a string

// Explanation:
// declare: The `declare` keyword is used to declare a variable that is defined elsewhere, typically in a different scope or external script. Here, `someVar` is declared and then assigned a string value.

