// Task 2: Implement the selection sort algorithm to sort an array of numbers in descending order. Log the sorted array.
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let maxIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[maxIdx]) {
                maxIdx = j;
            }
        }
        [arr[i], arr[maxIdx]] = [arr[maxIdx], arr[i]]; // Swap
    }
    console.log("Selection Sort (Descending):", arr);
}

selectionSort([64, 34, 25, 12, 22, 11, 90]);
