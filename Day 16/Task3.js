// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr, n) {
    if (n <= 0) {
      return 0;
    }
    return arr[n - 1] + sumArray(arr, n - 1);
  }
  
  // Test cases
  console.log(sumArray([1, 2, 3, 4, 5], 5)); // 15
  console.log(sumArray([1, 2, 3], 3)); // 6
  console.log(sumArray([5, 5, 5, 5], 4)); // 20
  