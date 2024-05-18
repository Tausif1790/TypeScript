//--------------------->> More Types in TypeScript

// Introduction: More types available in TypeScript for advanced type handling and operations.

//--------------------->> Map in action: Creating and using a Map
let map = new Map<string, number>();    // or // let map = new Map();
map.set("one", 1);
map.set("two", 2);
map.set("three", 3);

console.log(map.get("one")); // 1
console.log(map.has("two")); // true

map.delete("two");
console.log(map.size); // 2

map.clear();
console.log(map.size); // 0

for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
    // Output:
    // one: 1
    // two: 2
    // three: 3
}

// Explanation:
// Map in action: A `Map` is created with string keys and number values.
    // Methods like `set`, `get`, and `has` are used to manipulate the map.

//--------------------->> More methods on map: Additional methods for Map
const keysIterator = map.keys();                // Get an iterator of the keys
const keysArray = Array.from(keysIterator);     // Convert the iterator to an array
console.log(keysArray);         // Output: ["one", "two", "three"]

const valuesIterator = map.values();            // Get an iterator of the values
const valuesArray = Array.from(valuesIterator); // Convert the iterator to an array
console.log(valuesArray);                // Output: [1, 2, 3]


const entriesIterator = map.entries();              // Get an iterator of the entries
const entriesArray = Array.from(entriesIterator);   // Convert the iterator to an array
console.log(entriesArray);          // Output: [["one", 1], ["two", 2], ["three", 3]]

//--------------------->> Set: Creating and using a Set
let set = new Set<number>();        // let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(1); // Duplicate value, will not be added

console.log(set.has(2)); // true
console.log(set.size);   // 3

set.delete(3);
console.log(set.size);   // 2

set.forEach(function(item){     // iterate all values
    console.log(item);
});

// Explanation:
// Set: A `Set` is created to store unique values of any type. Methods like `add`, `has`,
    // `delete`, and `size` are used to manage the set.

//--------------------->> Regular Expressions: Creating and using regular expressions
let regex: RegExp = /hello/;
console.log(regex.test("hello world")); // true
console.log(regex.test("goodbye world")); // false

// Explanation:
// Regular Expressions: A `RegExp` object is created to match the pattern "hello".
    // The `test` method checks if a string matches the pattern.

//--------------------->> RegEx Program 1: Using regular expressions for validation
let emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let email = "example@example.com";
console.log(emailPattern.test(email)); // true

email = "invalid-email";
console.log(emailPattern.test(email)); // false

// Explanation:
// RegEx Program 1: A regular expression is used to validate email addresses.
    // The `test` method checks if an email string matches the pattern.

//--------------------->> RegEx Program 2: Extracting data using regular expressions
let datePattern: RegExp = /(\d{4})-(\d{2})-(\d{2})/;
let dateString = "2024-05-16";
let match = dateString.match(datePattern);

if (match) {
    console.log(`Year: ${match[1]}, Month: ${match[2]}, Day: ${match[3]}`);
    // Output:
    // Year: 2024, Month: 05, Day: 16
}

// Explanation:
// RegEx Program 2: A regular expression is used to extract the year, month, and day from a date string. The `match` method captures these groups.

//--------------------->> Date: Working with Date objects
let now = new Date();
console.log(now.toISOString()); // Current date and time in ISO format

let specificDate = new Date(2024, 4, 16); // May is month 4 (0-indexed)
console.log(specificDate.toDateString()); // Thu May 16 2024

// Explanation:
// Date: `Date` objects are used to handle dates and times. The `toISOString` and `toDateString` methods format dates.
