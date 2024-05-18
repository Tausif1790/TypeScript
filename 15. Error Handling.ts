//--------------------->> Error Handling in TypeScript

// Introduction: Error handling in TypeScript involves using try-catch blocks and
    // custom error classes to manage exceptions effectively.

//--------------------->> Try Catch: Using try-catch to handle errors
function handleErrors() {
    try {
        throw new Error("Something went wrong!");
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
}

handleErrors(); // Output: Caught an error: Something went wrong!

// Explanation:
// Try Catch: The try-catch block captures errors thrown within the try block and handles them in the catch block.

//--------------------->> Finally: Using finally to execute code after try-catch
function handleErrorsWithFinally() {
    try {
        throw new Error("Something went wrong again!");
    } catch (error) {
        console.error("Caught an error:", error.message);
    } finally {
        console.log("This will always execute.");
    }
}

handleErrorsWithFinally(); // Output: Caught an error: Something went wrong again!
                           //         This will always execute.

// Explanation:
// Finally: The finally block executes code regardless of whether an error was thrown or not.

//--------------------->> In Built Errors: Handling built-in errors like TypeError and RangeError
function handleBuiltInErrors() {
    try {
        let obj = undefined;
        console.log(obj.name);   // This will throw a TypeError
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Caught a TypeError:", error.message);
        }
    }
}

handleBuiltInErrors(); // Output: Caught a TypeError: Cannot read properties of undefined (reading 'name')

// Explanation:
// In Built Errors: Captures and handles specific built-in errors such as TypeError.

//--------------------->> Handling Specific Errors: Differentiating between error types
function handleSpecificErrors() {
    try {
        let x = JSON.parse("{ malformed json }"); // This will throw a SyntaxError
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error("Caught a SyntaxError:", error.message);
        } else if (error instanceof TypeError) {
            console.error("Caught a TypeError:", error.message);
        } else {
            console.error("Caught an unknown error:", error.message);
        }
    }
}

handleSpecificErrors(); // Output: Caught a SyntaxError: Unexpected token m in JSON at position 2

// Explanation:
// Handling Specific Errors: Differentiates between various error types for more specific error handling.

//--------------------->> Customer Errors Intro: Custom errors provide more specific error handling tailored to the application's needs.

//--------------------->> Create and use custom errors: Defining and using custom error classes
class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    try {
        throw new CustomError("This is a custom error");
    } catch (error) {
        if (error instanceof CustomError) {
            console.error("Caught a CustomError:", error.message);
        } else {
            console.error("Caught an unknown error:", error.message);
        }
    }
}

throwCustomError(); // Output: Caught a CustomError: This is a custom error

// Explanation:
// Customer Errors Intro: Custom errors allow creating specific error types for the application.
// Create and use custom errors: The `CustomError` class extends the built-in `Error` class to create a new error type.
