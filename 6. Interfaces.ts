//--------------------->> Interfaces in TypeScript

// Introduction: Interfaces in TypeScript are used to define the structure of objects,
    // ensuring they adhere to specific shapes and properties.
interface IStudent {
    firstName:string;   // property
    lastName:string;
    score:number;
    display():void;     // method
}
//Rules: Compile Time

//--------------------->> Define an Object Interface: Defining an interface for an object
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

//--------------------->> Create an object: Creating an object that adheres to the Person interface
let john: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};
console.log(john);

// Explanation:
// Define an Object Interface: The `Person` interface defines the structure
    // of a person object with `firstName`, `lastName`, and `age` properties.
// Create an object: The `john` object adheres to the `Person` interface structure.

//--------------------->> Defining optional properties: Defining an interface with optional properties
interface Car {
    make: string;
    model: string;
    year?: number;
}

let myCar: Car = {
    make: "Toyota",
    model: "Corolla"
};
console.log(myCar);

// Explanation:
// Defining optional properties: The `Car` interface includes an optional `year` property.
    // The `myCar` object is valid without the `year` property.

//--------------------->> Interfaces are only compile time: Demonstrating that interfaces are not present at runtime
                                                            // It converts to javascript (where no interface is present)
function printPerson(person: Person) {
    console.log(`${person.firstName} ${person.lastName}, Age: ${person.age}`);
}
printPerson(john);

// Explanation:
// Interfaces are only compile time: The `Person` interface
    // is used for type checking at compile time, but does not exist at runtime.

//--------------------->> Function Interfaces: Defining an interface for a function
interface Add {
    (x: number, y: number): void;        // Function type: takes two numbers, returns void
}
interface Sub {
    (x: number, y: number): number;      // Function type: takes two numbers, returns a number
}

let add4: Add;           // Variable that will hold a function of type Add
var sub4: Sub;           // Variable that will hold a function of type Sub

add4 = function(x: number, y: number): void {        // Function assigned to add4
    console.log(x + y);                              // Logs the sum of x and y
}
sub4 = function(a: number, b: number): number {      // Function assigned to sub4
    return a - b;                                    // Returns the result of a minus b
}
console.log(add4(10, 5) + " " + sub4(10, 5));

// Ex. 2
interface GreetFunction {
    (name: string): string;
}

let greet3: GreetFunction = (name: string) => {
    return `Hello, ${name}!`;
};
console.log(greet3("Alice"));

// Explanation:
// Function Interfaces: The `GreetFunction` interface defines a function that takes a string
    // and returns a string. The `greet` function adheres to this interface.

//--------------------->> Return Types in Functional interfaces: Specifying return types in function interfaces
interface AddFunction {
    (a: number, b: number);                 // if we do not specify return type of a function here, then we can use any return type below
}

let add3: AddFunction = (a, b) : number => {        // we can use any return type
    return a + b;
};
console.log(add3(2, 3));

//--------------------->> Adding methods to Object Interfaces: Adding methods to an object interface
interface Employee2 {
    name: string;
    age: number;
    greet(): string;
}

let employee: Employee2 = {
    name: "Alice",
    age: 30,
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};
console.log(employee.greet());

// Explanation:
// Adding methods to Object Interfaces: The `Employee` interface includes a method `greet`.
    // The `employee` object implements this method.

//--------------------->> Array Interfaces: Defining an interface for an array
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray = ["Bob", "Alice", "Tom"];
console.log(myArray[0]); // Bob

// Explanation:
// Array Interfaces: The `StringArray` interface defines an array where each index
    // contains a string. The `myArray` array adheres to this interface.

//--------------------->> String indexed Array Interfaces: Defining an interface with string index signature
interface NumberDictionary {
    [index: string]: number;
}

let scores: NumberDictionary = {
    "Alice": 10,
    "Bob": 20,
    "Charlie": 15
};
//Or
scores["Rony"] = 7;
scores["Mousi"] = 10;

console.log(scores["Alice"]); // 10

// Explanation:
// If we want to iterate this tne use `for in` loop
// String indexed Array Interfaces: The `NumberDictionary` interface defines
    // an object with string keys and number values. The `scores` object adheres to this interface.

//--------------------->> Extending interfaces: Creating an interface that extends another interface
interface Exterior{
    color:string;
    numOfDoors:Number;
}

interface Interior{
    seats: number;
    auto: boolean;
}

interface Carr extends Exterior, Interior{
    make: string;
    model2:String;
    year2: number;
}

let mycar : Carr = {
    make: "Honde",
    model2: "FlyCar",
    year2: 2018,
    color: "grey",
    numOfDoors: 5,
    seats: 11,
    auto: true
}

