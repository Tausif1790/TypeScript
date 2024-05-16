//--------------------->> Basic Types
// boolean: Represents true/false values (isDone).
// number: Represents all numeric values including decimal (decimal), hexadecimal (hex), binary (binary), and octal (octal).
// string: Represents text values (color, fullName, sentence).
let isDone: boolean = true;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let color: string = "blue";
let fullName: string = `Bob Bobbington`;
let agee: number = 37;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;

//--------------------->> Arrays:
// list: An array of numbers using the number[] syntax.
// genericList: An array of numbers using the Array<number> syntax.
let list: number[] = [1, 2, 3];
let genericList: Array<number> = [4, 5, 6];

//--------------------->> Tuples
// tuple: A fixed-size array that can hold multiple types ([string, number]).
let tuple: [string, number];
tuple = ["hello", 10];

//--------------------->> Enums
//Color: An enum to define a set of named constants (Red, Green, Blue).
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;

//--------------------->> Any
// notSure: A variable that can hold any type of value, useful when the type is not known during development.
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

//--------------------->> Union Types
//union: A variable that can hold values of multiple types (number or string).
let union: number | string;
union = 20;
union = "twenty";

//--------------------->> Type Assertions
// someValue: A way to override TypeScript's inferred type and specify a different type (as string).
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

//--------------------->> Void
// warnUser: A function that does not return a value.
// unusable: A variable that can only hold undefined or null.
function warnUser(): void {
    console.log("This is my warning message");
}
let unusable: void = undefined;

//--------------------->> Null and Undefined
// u: Represents an undefined value.
// n: Represents a null value.
let u: undefined = undefined;
let n: null = null;

//--------------------->> Never
// error: A function that never returns (throws an exception).
// infiniteLoop: A function that has an infinite loop and never returns.
function error(message: string): never {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop(): never {
    while (true) {}
}