// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) mergedArray.push(arr1[i++]);
        else mergedArray.push(arr2[j++]);
    }
    return [...mergedArray, ...arr1.slice(i), ...arr2.slice(j)];
}

console.log("Merged Array:", mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));
