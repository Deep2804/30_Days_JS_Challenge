// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value. 
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1; // Target not found
}

console.log("Binary Search Index:", binarySearch([11, 12, 22, 25, 34, 64, 90], 25));
