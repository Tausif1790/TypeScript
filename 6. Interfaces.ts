//--------------------->> Interfaces in TypeScript

// Introduction: Interfaces in TypeScript are used to define the structure of objects,
    // ensuring they adhere to specific shapes and properties.

// Define an Object Interface: Defining an interface for an object
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

// Create an object: Creating an object that adheres to the Person interface
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

// Defining optional properties: Defining an interface with optional properties
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

// Interfaces are only compile time: Demonstrating that interfaces are not present at runtime
function printPerson(person: Person) {
    console.log(`${person.firstName} ${person.lastName}, Age: ${person.age}`);
}
printPerson(john);

// Explanation:
// Interfaces are only compile time: The `Person` interface
    // is used for type checking at compile time, but does not exist at runtime.

// Function Interfaces: Defining an interface for a function
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

// Return Types in Functional interfaces: Specifying return types in function interfaces
interface AddFunction {
    (a: number, b: number): number;
}

let add3: AddFunction = (a, b) => {
    return a + b;
};
console.log(add3(2, 3));

// Explanation:
// Return Types in Functional interfaces: The `AddFunction` interface specifies
    // that the function takes two numbers and returns a number. The `add` function adheres to this interface.

// Adding methods to Object Interfaces: Adding methods to an object interface
interface Employee {
    name: string;
    age: number;
    greet(): string;
}

let employee: Employee = {
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

// Array Interfaces: Defining an interface for an array
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray = ["Bob", "Alice", "Tom"];
console.log(myArray[0]); // Bob

// Explanation:
// Array Interfaces: The `StringArray` interface defines an array where each index
    // contains a string. The `myArray` array adheres to this interface.

// String indexed Array Interfaces: Defining an interface with string index signature
interface NumberDictionary {
    [index: string]: number;
}

let scores: NumberDictionary = {
    "Alice": 10,
    "Bob": 20,
    "Charlie": 15
};
console.log(scores["Alice"]); // 10

// Explanation:
// String indexed Array Interfaces: The `NumberDictionary` interface defines
    // an object with string keys and number values. The `scores` object adheres to this interface.

// Extending interfaces: Creating an interface that extends another interface
interface Shape {
    color: string;
}

interface Circle extends Shape {
    radius: number;
}

let circle: Circle = {
    color: "red",
    radius: 10
};
console.log(circle);

// Explanation:
// Extending interfaces: The `Circle` interface extends the `Shape` interface,
    // adding a `radius` property. The `circle` object adheres to the `Circle` interface.
