//--------------------->> Objects and Arrays
// An object person is created using the object literal syntax with
//  properties firstName, lastName, and age. Properties can be accessed
//   using dot notation or bracket notation.

// Object Literal: Creating an object using the object literal syntax
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};

// Accessing object properties
console.log(person.firstName);      // John
console.log(person["lastName"]);    // Doe

// For-In Loop: Iterating over the properties of an object
// For-In Loop: A for-in loop iterates over the keys of the person object, allowing us to access each key-value pair.
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
    // Output:
    // firstName: John
    // lastName: Doe
    // age: 25
}

// Arrays: Creating an array and accessing its elements
// Arrays: An array fruits is created with three string elements. We access elements using their index.
let fruits: string[] = ["Apple", "Banana", "Cherry"];
//let fruits: any = ["Apple", "Banana", 10];
fruits.push("mango");
console.log(fruits[0]); // Apple

// Iterating over array elements using a for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    // Output:
    // Apple
    // Banana
    // Cherry
}

// De-Structuring Arrays: Extracting values from an array into variables
// De-Structuring Arrays: The array fruits is de-structured into variables firstFruit, secondFruit, and thirdFruit.
let [a, b, d] = fruits;
console.log(a); // Apple
console.log(b); // Banana
console.log(d); // Cherry

// De-Structuring Objects: Extracting values from an object into variables
// De-Structuring Objects: The object person is de-structured into variables firstName, lastName, and age.
let { firstName, lastName, age } = person;      // variable should be same name in this
console.log(firstName); // John
console.log(lastName); // Doe
console.log(age); // 25


// Array
let levels = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(levels.toString());     // Output: "1,2,3,4,5,6,7,8"
console.log(levels.join(" "));      // Output: "1 2 3 4 5 6 7 8"
console.log(levels.slice(3));       // Output: [4, 5, 6, 7, 8]
console.log(levels.toString());     // Output: "1,2,3,4,5,6,7,8"
levels.splice(2, 3, 88, 99);
console.log(levels.toString());     // Output: "1,2,88,99,6,7,8"
levels.push(10, 20, 30);
console.log(levels.toString());     // Output: "1,2,88,99,6,7,8,10,20,30"
console.log(levels.pop());          // Output: 30
console.log(levels.toString());     // Output: "1,2,88,99,6,7,8,10,20"




