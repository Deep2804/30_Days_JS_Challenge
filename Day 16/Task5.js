// Activity 3: String Manipulation and Recursion
// Task 5: Write a recursive function to reverse a string.Log the result for a few test cases.
function reverseString(str) {
    if (str === "") {
      return "";
    }
    return reverseString(str.substr(1)) + str.charAt(0);
  }
  
  // Test cases
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"
  console.log(reverseString("abcde")); // "edcba"
  