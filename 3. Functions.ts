//--------------------->> Functions in TypeScript

// First Function: Defining a simple function
function greet() {
    console.log("Hello, world!");
}
greet(); // Hello, world!

// Explanation:
// First Function: The `greet` function is a simple function that prints "Hello, world!" to the console.

//--------------------->> Passing a parameter: Defining a function with a single parameter
function greetPerson(name: string) {
    console.log(`Hello, ${name}!`);
}
greetPerson("Alice"); // Hello, Alice!

// Explanation:
// Passing a parameter: The `greetPerson` function takes a `name` parameter of type string and prints a greeting.

//--------------------->> Passing Multiple Parameters: Defining a function with multiple parameters
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(2, 3)); // 5

// Explanation:
// Passing Multiple Parameters: The `add` function takes two parameters `a` and `b` of type number and returns their sum.

//--------------------->> Optional Parameters: Defining a function with an optional parameter
function buildName(firstName: string, lastName?: string) {
    if (lastName) {                         // or (lastName != Undefined)
        return `${firstName} ${lastName}`;
    } else {
        return firstName;
    }
}
console.log(buildName("John")); // John
console.log(buildName("John", "Doe")); // John Doe

// Explanation:
// Optional Parameters: The `buildName` function takes `firstName` and an optional `lastName` parameter. If `lastName` is provided, it returns the full name, otherwise it returns the first name.

//--------------------->> Default Values: Defining a function with a default parameter value
function greetDefault(name: string = "stranger") {
    console.log(`Hello, ${name}!`);
}
greetDefault(); // Hello, stranger!
greetDefault("Alice"); // Hello, Alice!

// Explanation:
// Default Values: The `greetDefault` function has a default value "stranger" for the `name` parameter, which is used if no argument is provided.

//--------------------->> Function as parameter: Passing a function as an argument to another function
function add2(num1: number, num2: number) : number{
    return num1+num2;
}
function calculator (fun:any) : void{
    console.log(fun(10,20)) ;
}
calculator(add2(10, 20));       // 30
calculator(add2); 

//ex2.

function callFunction(fn: () => void) {
    fn();
}
callFunction(() => console.log("Function called!")); // Function called!

// Explanation:
// Function as parameter: The `callFunction` function takes another function `fn` as a parameter and calls it.

//--------------------->> Returning a function: Defining a function that returns another function
function calculator2() : any{
    function subtract(num1: number, num2: number) : number{
        return num1 - num2;
    }
    return subtract;
}

var sub = calculator2 ();    // saving func to variable
console.log(sub(20,5));      // invoking subtract function
//or
console.log(calculator2()(20,5));   // second way to invoke subtract

// Ex2.

function createMultiplier(multiplier: number): (value: number) => number {
    return (value: number) => value * multiplier;
}
const double = createMultiplier(2);
console.log(double(5)); // 10

// Explanation:
// Returning a function: The `createMultiplier` function returns another function that multiplies its argument by the specified `multiplier`.

//--------------------->> Anonymous Functions: Using an anonymous function
const square = function (x: number): number {
    return x * x;
};
console.log(square(4)); // 16

// Explanation:
// Anonymous Functions: An anonymous function is assigned to the `square` variable, which calculates the square of a number.

//--------------------->> Overloading: Function overloading with different parameter types
// restrict overloaded function to a perticular type
function reverse(value: string): string;
function reverse(value: number): number;
function reverse(value: any): any {
    if (typeof value === "string") {
        return value.split("").reverse().join("");
    } else if (typeof value === "number") {
        return parseFloat(value.toString().split("").reverse().join(""));
    }
}
console.log(reverse("hello")); // "olleh"
console.log(reverse(12345)); // 54321
// console.log(reverse(true)); // compile error

// Explanation:
// Overloading: The `reverse` function is overloaded to handle both string and number inputs, reversing the string or number accordingly.

//--------------------->> Rest Params: Using rest parameters in a function
// function sum(x: int, y: string, ...numbers: number[]): number (also done like this, ...numbers should be last parameter)
function sum(...numbers: number[]): number {
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4)); // 10

// Explanation:
// Rest Params: The `sum` function uses rest parameters to accept any number of arguments and returns their sum.

//--------------------->> Using a Type on REST Param: Typing rest parameters in a function
function joinStrings(separator: string, ...strings: string[]): string {
    return strings.join(separator);
}
console.log(joinStrings(", ", "apple", "banana", "cherry")); // "apple, banana, cherry"

// Explanation:
// Using a Type on REST Param: The `joinStrings` function takes a `separator` and uses rest parameters to accept multiple strings, returning them joined by the separator.
