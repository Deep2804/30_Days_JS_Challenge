import add from './add';
import multiply from './multiply';
import { PI, circleArea } from './constants';

const person = require('./person');
const { subtract } = require('./math');
const _ = require('lodash');
const axios = require('axios');

// Task 1
const result = add(2, 3);
console.log(result); // 5

// Task 2
console.log(person.name); // John Doe
console.log(person.age);  // 30
person.greet(); // Hello, my name is John Doe and I am 30 years old.

// Task 3
console.log(subtract(5, 3)); // 2

// Task 4
console.log(multiply(4, 5)); // 20

// Task 5
console.log(PI);                  // 3.14
console.log(circleArea(3));       // 28.26

// Task 6
const array = [1, 2, 3, 4];
const reversedArray = _.reverse(array.slice()); // Using slice() to avoid modifying the original array
console.log(reversedArray); // [4, 3, 2, 1]

// Task 7
axios.get('https://api.github.com/users/octocat')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
