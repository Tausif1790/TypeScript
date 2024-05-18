//--------------------->> Access Modifiers, Encapsulation, and Static in TypeScript

//--------------------->> public and readonly: Defining public and readonly properties
class Person2 {
    public firstName: string;
    public readonly lastName: string;
    public readonly country: string = "India";

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let john2 = new Person2("John", "Doe");
console.log(john2.firstName);    // John
console.log(john2.lastName);     // Doe
john2.firstName = "Jane";        // Allowed
// john2.lastName = "Smith";     // Error: Cannot assign to 'lastName' because it is a read-only property.
// john2.country = "Jane";       // Error: Cannot assign to 'country' because it is a read-only property.   

// Explanation:
// public and readonly: The `Person` class has a `firstName` property that is public and a `lastName` property that is readonly, preventing modifications after initialization.

//--------------------->> Encapsulation: Using private properties to encapsulate data
class Employee4 {
    private _salary: number;

    constructor(private firstName: string, private lastName: string, salary: number) {
        this._salary = salary;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    // accessor methods: Using getters and setters for private properties
    get salary(): number {
        return this._salary;
    }

    set salary(newSalary: number) {
        if (newSalary > 0) {
            this._salary = newSalary;
        }
    }
}

let emp4 = new Employee4("Alice", "Smith", 50000);
console.log(emp4.getFullName()); // Alice Smith
console.log(emp4.salary); // 50000
emp4.salary = 60000; // Allowed through setter
console.log(emp4.salary); // 60000
// emp._salary = 70000; // Error: Property '_salary' is private and only accessible within class 'Employee'

// Explanation:
// Encapsulation: The `Employee` class encapsulates the `_salary` property, making it private and only accessible through getter and setter methods.

//--------------------->> Using Static Properties: Defining static properties on a class
class Helper {
    static pi: number = 3.14;

    static circleArea(radius: number): number {
        return Helper.pi * radius * radius;
    }
}

console.log(Helper.pi); // 3.14
console.log(Helper.circleArea(5)); // 78.5

// Explanation:
// Using Static Properties: The `Helper` class has a static property `pi` and a static method `circleArea` that calculates the area of a circle using the static `pi` value.

//--------------------->>More about static: Static properties and methods are shared among all instances
class Counter {
    static count: number = 0;

    static increment() {
        Counter.count++;
    }
}

Counter.increment();
Counter.increment();
console.log(Counter.count); // 2

// Explanation:
// More about static: The `Counter` class has a static property `count` and a static method `increment` that increases the count. The count is shared among all instances of the class.

//--------------------->> Static Methods: Using static methods to perform operations that are not tied to a specific instance
class MathHelper {
    static square(x: number): number {
        return x * x;
    }
}

console.log(MathHelper.square(4)); // 16

// Explanation:
// Static Methods: The `MathHelper` class has a static method `square` that calculates the square of a number. This method can be called without creating an instance of the class.
