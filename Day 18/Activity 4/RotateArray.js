// Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

console.log("Rotated Array:", rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
