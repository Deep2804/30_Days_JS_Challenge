// Task 6: Write a recursive function to check if a string is palindrome. Log the result for a  few test cases.
function isPalindrome(str) {
    if (str.length <= 1) {
      return true;
    }
    if (str.charAt(0) !== str.charAt(str.length - 1)) {
      return false;
    }
    return isPalindrome(str.substr(1, str.length - 2));
  }
  
  // Test cases
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false
  console.log(isPalindrome("madam")); // true
  