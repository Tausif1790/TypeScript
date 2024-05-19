//--------------------->> Modules in TypeScript

// Introduction: Modules are used to organize code into reusable blocks. Each module has its own scope.

//--------------------->> Using Function Modules: Exporting and importing functions from modules
// file: mathUtils.ts
export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

// file: app.ts
import { add, subtract } from './mathUtils';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2

// Explanation:
// Using Function Modules: Functions `add` and `subtract` are defined in `mathUtils.ts`
    // and exported. They are then imported and used in `app.ts`.

//--------------------->> Import Aliasing and Alternate Export Syntax:
    // Using aliases for imports and different ways to export
// file: mathOperations.ts
export { add as addition, subtract as subtraction } from './mathUtils';     //Aliasing

// file: main.ts
import { addition, subtraction } from './mathOperations';
//Or
// import * as i from './mathOperations';                  // Aliasing

console.log(addition(10, 5)); // 15
console.log(subtraction(10, 5)); // 5
//Or
// console.log(i.addition(10, 5)); // 15
// console.log(i.subtraction(10, 5)); // 5

// Explanation:
// Import Aliasing and Alternate Export Syntax: The `add` and `subtract` functions
    // are re-exported from `mathOperations.ts` with aliases `addition` and
    // `subtraction`, and then imported and used in `main.ts`.

//--------------------->> Default Exports: Exporting and importing default values
// file: config.ts
const config = {
    apiUrl: "http://api.example.com",
    timeout: 5000
};

export default config;

// file: index.ts
import config from './config';                  // {config} - not this

console.log(config.apiUrl);  // http://api.example.com
console.log(config.timeout); // 5000

// Explanation:
// Default Exports: The `config` object is exported as the default export from `config.ts` and imported in `index.ts`.

//--------------------->> Class Modules: Exporting and importing classes
// file: User.ts
export class User3 {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// file: userApp.ts
import { User } from './User';

let user = new User("John Doe", 30);
console.log(user.name); // John Doe
console.log(user.age); // 30

// Explanation:
// Class Modules: The `User` class is exported from `User.ts` and imported and used in `userApp.ts`.

//--------------------->> Aliasing class modules: Using aliases for class imports
// file: Employee.ts
export class Employee {
    constructor(public name: string, public position: string) {}
}

// file: employeeApp.ts
import { Employee as Staff } from './Employee';

let employee = new Staff("Jane Doe", "Manager");
console.log(employee.name); // Jane Doe
console.log(employee.position); // Manager

// Explanation:
// Aliasing class modules: The `Employee` class is imported from `Employee.ts` and given an alias `Staff` in `employeeApp.ts`.
