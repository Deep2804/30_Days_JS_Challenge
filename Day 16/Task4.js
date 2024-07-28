// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxArray(arr, n) {
    if (n === 1) {
      return arr[0];
    }
    return Math.max(arr[n - 1], maxArray(arr, n - 1));
  }
  
  // Test cases
  console.log(maxArray([1, 2, 3, 4, 5], 5)); // 5
  console.log(maxArray([10, 20, 30, 5, 15], 5)); // 30
  console.log(maxArray([7, 2, 9, 1, 6], 5)); // 9
  