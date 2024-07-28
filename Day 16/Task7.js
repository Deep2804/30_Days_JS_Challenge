// Activity 4: Recursive Search
// Task 7: Write a recusive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, low, high) {
    if (low > high) {
      return -1;
    }
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      return binarySearch(arr, target, low, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, high);
  }
  
  // Test cases
  let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(binarySearch(sortedArray, 5, 0, sortedArray.length - 1)); // 4
  console.log(binarySearch(sortedArray, 1, 0, sortedArray.length - 1)); // 0
  console.log(binarySearch(sortedArray, 10, 0, sortedArray.length - 1)); // 9
  console.log(binarySearch(sortedArray, 11, 0, sortedArray.length - 1)); // -1
  