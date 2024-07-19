// Activity 1: Object Creation and Access
// Task 1: Create a object representing a book with properties like title,author, and year and log the result to the console.
let Book = {
    title: "JavaScript",
    author: "Deepak Singh",
    year: 2024
}

console.log(Book);


// Task 2: Access and log the title and author properties of the book object.
console.log(Book.title);
console.log(Book.author);



// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book title and author, and log the result of calling this method.
let BookNew = {
    title: 'JavaScript-A Scripting Language',
    author: 'Deepak Singh',
    year: 2024,

    getFind : function() {
        return `The title of the book is ${this.title} and author is ${this.author}`
    }
}
console.log(BookNew.getFind());

// Task 4: Add a method to the book object that takes a parameter(year) and updates the book year properties then log the updated object. 
let BookYear = {
    title: 'JavaScript-A Scripting Language',
    author: 'Deepak Singh',
    year: 2024,
    updateYear: function(newYear){
    this.year= newYear;
    }
}

BookYear.updateYear(2020);
console.log(BookYear);

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books(an array of book objects), and log the library object to the console. 

const Library = {
    name: "Coding Books",
    Books: [
        {title: 'Javascript', author: "Deepak Singh", year: 2024},
        {title: 'CSS', author: "Deepak Singh", year: 2023},
        {title: 'HTML', author: "Deepak Singh", year: 2022},
        {title: 'React', author: "Deepak Singh", year: 2021}
    ]
}
console.log(Library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(Library.name);

Library.Books.forEach(Books => {
    console.log(`Books title is ${Books.title}`);
})


// Activity 4: The this keyword
// Task 7: Add a method to the book object that uses the this keyword to return string with the book title and year, and log the result of calling this method. 
const Book1 = {
    title: "Ramayan",
    author: "Ved Vyas",
    year: 1800,

    getDetails : function(){
        return `The title is ${this.title} and author is ${this.author}`
    }
}
console.log(Book1.getDetails());


// Activity 5: Object Iteration
// Task 8: Use a for..in loop to iterate over the properties of the book object and log each property and its value.
for (let property in Book1) {
    console.log(`${property}: ${Book1[property]}`);
}



// Task 9: Use object.keys and object.values methods to log all the keys and values of the book object.
const keys = Object.keys(Book1);
console.log('Keys:', keys);

const values = Object.values(Book1);;
console.log('Values:', values);
