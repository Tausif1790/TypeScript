//--------------------->> Type Casting in TypeScript

//--------------------->> String to numeric: Converting a string to a number
let str: string = "123";
let num: number = Number(str);
console.log(num); // 123

let strFloat: string = "123.45";
let numFloat: number = parseFloat(strFloat);
console.log(numFloat); // 123.45

let strInt: string = "123.45";
let numInt: number = parseInt(strInt);
console.log(numInt); // 123

// Explanation:
// String to numeric: The `Number`, `parseFloat`, and `parseInt` functions are used to convert strings to numbers.
    // `Number` converts a string to a number, `parseFloat` converts a string to a floating-point number,
        // and `parseInt` converts a string to an integer.

//--------------------->> Using the toString method: Converting a number to a string
let number: number = 456;
let stringNumber: string = number.toString();
console.log(stringNumber); // "456"

let booleanValue: boolean = true;
let stringBoolean: string = booleanValue.toString();
console.log(stringBoolean); // "true"

// Explanation:
// Using the toString method: The `toString` method is used to convert a number or boolean to a string.

//--------------------->> Object Casting: Casting one type to another
class Personn {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Personn {
    employeeId: number;

    constructor(name: string, employeeId: number) {
        super(name);
        this.employeeId = employeeId;
    }
}

let employee5 : Personn = new Employee("Alice", 123);
console.log((employee5 as Employee).employeeId); // 123

// Explanation:
// Object Casting: The `employee` object, which is of type `Person`, is cast to type `Employee` using the `as` syntax to access the `employeeId` property.
