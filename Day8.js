// Activity 1: Template Literal
// Task 1: Use Template Literal to create a string that includes variables for a person's name and age, and log the string to the console.
const Pname = "Deepak Singh";
const Age = 23;
console.log(`The person name is ${Pname} and age is${Age}`);


// Task 2: Create a multi-line string using template literals and log it to the console.
const multiLine = `My Name is Deepak Singh.
I am belong to Meerut.
I had completed my graduation from AKTU University.
My college name is Mangalmay Institute of Engineering and Technology`

console.log(multiLine);

// Activity 2: Destructuring
// Task 3: Use Array destructuring to extract the first and second elements from a array of numbers and log them to the console.
const Numbers = [12,13,23,56,45,87]
const[first,second] = Numbers;

console.log("First Number is: ",first);
console.log("Second Number is:",second);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const Book = {
    title:"JavaScript",
    author: "Deepak Singh",
}

const {title,author} = Book;
console.log("The title is:",title);
console.log("The author is:",author);

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional element, and log the new array to the console.
const arr1 = [1,2,3,4,5]
const newArr = [...arr1,6,7,8,9]

console.log(newArr);


// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result.
function sum(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const result = sum(1, 2, 3, 4, 5);
console.log('Sum:', result);



// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
    return a * b;
}

// Calling the function with both parameters
const resultWithTwoParams = multiply(5, 3);
console.log('Result with two parameters:', resultWithTwoParams); // Output: 15

// Calling the function with only the first parameter
const resultWithOneParam = multiply(5);
console.log('Result with one parameter:', resultWithOneParam); // Output: 5



// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties and log the object to the console.
const name = 'Deepak';
const age = 25;

const person = {
    name, // Property shorthand
    age, // Property shorthand
    greet() { // Method shorthand
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
    celebrateBirthday() {
        this.age += 1;
        return `Happy Birthday! I am now ${this.age} years old.`;
    }
};

console.log('Person object:', person);
console.log(person.greet()); // Logs: Hello, my name is Deepak and I am 25 years old.
console.log(person.celebrateBirthday()); // Logs: Happy Birthday! I am now 26 years old.
console.log('Updated Person object:', person);


// Task 9: Create an object with computed property names based on variables and log the object to the console. 
const propertyName1 = 'firstName';
const propertyName2 = 'lastName';
const propertyName3 = 'age1';

const firstName = 'Deepak';
const lastName = 'Singh';
const age1 = 25;

const person1 = {
    [propertyName1]: firstName,
    [propertyName2]: lastName,
    [propertyName3]: age,
};

console.log('Person object:', person1);
