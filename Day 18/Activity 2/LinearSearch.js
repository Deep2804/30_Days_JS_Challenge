// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1; // Target not found
}

console.log("Linear Search Index:", linearSearch([64, 34, 25, 12, 22, 11, 90], 22));
