// Activity 1: Array Creation and Access
// TAsk 1: Create an array of numbers from 1 to 5 and log the result to the console.
let arr= [1,2,3,4,5];
console.log(arr);
// Task 2: Access the first and last elements of the array and log the result to the console.
console.log(arr[0]);
console.log(arr[4]);

// Actitity 2: Arrays Method(basic)
// Task 3: Use the push method to add new number to the end of the array and log the updated array.
arr.push(6);
console.log(arr);
// Task 4: Use the pop method to remove last element from the array and log the updated array.
arr.pop();
console.log(arr);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log(arr);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(1);
console.log(arr);



// Activity 3: Arrays method(intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log to the result.
const arr1 = [2,3,5,7]
const map1 = arr1.map((x) => x*2);

console.log(map1);
// Task 8: Use the filter method to create a new array with only even numbers and log the result to new array
const filter1 = arr1.filter((y) => y%2==0);
console.log(filter1);

// Task 9: Use the reduce method to calculate the sum of all numbers in the arrays and log the result to console.
const initialValue = 0;
const reduce1 = arr1.reduce((accumulator, currValue) => accumulator+currValue,initialValue);
console.log(reduce1);


// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
let array = [1,2,3,4,5,6,7,8,9]
for(let i=0;i<array.length;i++){
    console.log(array[i]);
} 
// Task 11: Use the forEach method to iterate over the array and log each element to the console.
array.forEach(element => {
    console.log(array);
});


// Activity 5: Multi-dimensional Array
// Task 12: Create a two-dimensional array(matrix) and log the result to the console.
let twoDArray = [[1,2,3],[4,5,6],[7,8,9]];
console.log(twoDArray);
// Task 13: Access and log a specific element from the two-dimensional array.
console.log(twoDArray[0][0]);
console.log(twoDArray[0][1]);
console.log(twoDArray[0][2]);
console.log(twoDArray[1][0]);
console.log(twoDArray[1][1]);
console.log(twoDArray[1][2]);
console.log(twoDArray[2][0]);
console.log(twoDArray[2][1]);
console.log(twoDArray[2][2]);