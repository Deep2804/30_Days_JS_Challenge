// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order.
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    console.log("Bubble Sort (Ascending):", arr);
}

bubbleSort([64, 34, 25, 12, 22, 11, 90]);
