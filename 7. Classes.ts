//--------------------->> Classes in TypeScript

// Introduction: Classes in TypeScript provide a way to define objects
    // with properties and methods, similar to other object-oriented languages.

//--------------------->> Create a class: Defining a basic class
class Person {
    firstName: string;
    lastName: string;
}

//--------------------->> Add a constructor: Initializing class properties using a constructor
class Employee {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Add Function properties: Adding methods to a class
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let emp = new Employee("Alice", "Smith", 30);
console.log(emp);
console.log(emp.getFullName()); // Alice Smith

// Explanation:
// Create a class: The `Person` class is a simple class with two properties: `firstName` and `lastName`.
// Add a constructor: The `Employee` class initializes its properties through a constructor and includes an `age` property.
// Add Function properties: The `Employee` class has a method `getFullName` that returns the full name of the employee.

//--------------------->> Power of TypeScript: Demonstrating TypeScript's type checking
emp.age = 35; // TypeScript ensures that `age` is a number
// emp.age = "thirty"; // Error: Type 'string' is not assignable to type 'number'

// Explanation:
// Power of TypeScript: TypeScript provides compile-time type checking to ensure that
    // values assigned to class properties match their types.

//--------------------->> Using for-in and instanceof: Iterating over properties and checking types
for (let key in emp) {
    // if (emp.hasOwnProperty(key)) {               // same behavior as below
    //     console.log(`${key}: ${emp[key]}`);
    // }
    if (emp[key] instanceof Function) {         // it will skip if it is a function
        continue;
    }
    else{
        console.log(`${key}: ${emp[key]}`);
    }
}
// Output:
// firstName: Alice
// lastName: Smith
// age: 35

console.log(emp instanceof Employee); // true

// Explanation:
// Using for-in and instanceof: The `for-in` loop iterates over the properties of the `emp` object.
    // The `instanceof` operator checks if `emp` is an instance of the `Employee` class.

//--------------------->> Implementing an interface: Ensuring a class adheres to a specific structure
interface Human {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class Manager implements Human {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let mgr = new Manager("Bob", "Brown", 25);
//let mgr : Manager = new Manager("Bob", "Brown", 25);
console.log(mgr.getFullName()); // Bob Brown

// Explanation:
// Implementing an interface: The `Manager` class implements the `Human` interface,
    // ensuring it has the required properties and methods.
