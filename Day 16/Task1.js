// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  // Test cases
  console.log(factorial(5)); // 120
  console.log(factorial(0)); // 1
  console.log(factorial(7)); // 5040
  