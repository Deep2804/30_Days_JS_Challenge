// Task 8: Write a recursive function to count the occurences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target, n) {
    if (n <= 0) {
      return 0;
    }
    return (arr[n - 1] === target ? 1 : 0) + countOccurrences(arr, target, n - 1);
  }
  
  // Test cases
  console.log(countOccurrences([1, 2, 3, 2, 2, 4, 2], 2, 7)); // 4
  console.log(countOccurrences([1, 1, 1, 1, 1], 1, 5)); // 5
  console.log(countOccurrences([1, 2, 3, 4, 5], 6, 5)); // 0
  