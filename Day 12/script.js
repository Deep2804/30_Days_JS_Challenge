// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a function that intentionally throw an error and use a try-catch block to handle the error and log
// an appropriate message to the console.
function throwError() {
    try {
      throw new Error("This is an intentional error.");
    } catch (error) {
      console.log("Caught an error:", error.message);
    }
  }
  
  throwError();
  
// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch
// block to handle the error.
function divideNumbers(a, b) {
    try {
      if (b === 0) {
        throw new Error("Cannot divide by zero.");
      }
      console.log("Result:", a / b);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
  
  divideNumbers(10, 2);  // Should print the result
  divideNumbers(10, 0);  // Should print the error message

// Activity 2: Finally Block
// Task 3: Write a script that includes try-catch block and a finally block. Log messages in the try, catch, and finally blocks
// to observe the execution flow.
function tryCatchFinallyDemo() {
    try {
      console.log("Inside try block.");
      // Intentionally throwing an error
      throw new Error("An error occurred.");
    } catch (error) {
      console.log("Inside catch block:", error.message);
    } finally {
      console.log("Inside finally block.");
    }
  }
  
  tryCatchFinallyDemo();

// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extend the built-in Error class. Throw an instance of this custom error in a function 
// and handle it using a try-catch block. 
class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  function throwCustomError() {
    try {
      throw new CustomError("This is a custom error.");
    } catch (error) {
      console.log(`${error.name}: ${error.message}`);
    }
  }
  
  throwCustomError();
  


// Task 5: Write a function that validates user input(e.g., checking if the string is not empty) and throws a custom error if the
// validation fails.Handle the custom error using a try-catch block.
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  function validateInput(input) {
    try {
      if (input.trim() === "") {
        throw new ValidationError("Input cannot be empty.");
      }
      console.log("Valid input:", input);
    } catch (error) {
      if (error instanceof ValidationError) {
        console.log(`${error.name}: ${error.message}`);
      } else {
        console.log("An unexpected error occurred.");
      }
    }
  }
  
  validateInput("Valid input");
  validateInput("");  // Should print the custom error message
  
// Activity 4: Error handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message  
// to the console.
const randomPromise = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
      resolve("Promise resolved!");
    } else {
      reject("Promise rejected.");
    }
  });
  
  randomPromise
    .then(message => console.log(message))
    .catch(error => console.log("Caught:", error));
  


// Task 7: Use try-catch within an Async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handlePromise() {
    try {
      const result = await randomPromise;
      console.log(result);
    } catch (error) {
      console.log("Caught in async function:", error);
    }
  }
  
  handlePromise();
  
// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate message to the console.
fetch('https://invalidurl.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Fetch error:", error.message));


// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate
// error message.
async function fetchData() {
    try {
      const response = await fetch('https://invalidurl.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Async fetch error:", error.message);
    }
  }
  
  fetchData();
  