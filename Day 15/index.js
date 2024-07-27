// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function scope. Call the inner function and log the result.
function outerFunction() {
    let outerVariable = "I am from the outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // Logs: "I am from the outer function"



// Task 2: Create a closure that maintains a private counter. Implement function to to increment and get the current value of the counter.
function createCounter() {
    let counter = 0;

    return {
        increment: function() {
            counter++;
        },
        getValue: function() {
            return counter;
        }
    };
}

const myCounter = createCounter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue()); // Logs: 2



// Activity 2: Practical Closures
// Task 3: Write a function that generate unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function createIDGenerator() {
    let lastID = 0;

    return function() {
        lastID++;
        return lastID;
    };
}

const generateID = createIDGenerator();
console.log(generateID()); // Logs: 1
console.log(generateID()); // Logs: 2




// Task 4: Create a closure that captures a unique name and returns a function that greets the user with name.
function createGreeter(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}

const greetJohn = createGreeter("John");
greetJohn(); // Logs: "Hello, John!"



// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createFunctionArray() {
    const functions = [];

    for (let i = 0; i < 5; i++) {
        functions.push(function() {
            console.log(i);
        });
    }

    return functions;
}

const functionArray = createFunctionArray();
functionArray[0](); // Logs: 0
functionArray[1](); // Logs: 1
functionArray[2](); // Logs: 2
functionArray[3](); // Logs: 3
functionArray[4](); // Logs: 4


// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement method to add, remove, and list items.
const itemManager = (function() {
    const items = [];

    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems: function() {
            return items;
        }
    };
})();

itemManager.addItem("Item 1");
itemManager.addItem("Item 2");
console.log(itemManager.listItems()); // Logs: ["Item 1", "Item 2"]
itemManager.removeItem("Item 1");
console.log(itemManager.listItems()); // Logs: ["Item 2"]




// Activity 5: Memoization
// Task 7: Write a function that memoized version of a function that calculates the factorial of a number.
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = args.toString();
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Logs: 120
console.log(memoizedFactorial(6)); // Logs: 720, utilizes cached result for 5!

