// Task 11: Write a function to solve the  knapsack problem using dynamic programming. Log the maximum value that can be obtained.
function knapsack(weights, values, capacity) {
    let n = weights.length;
    let dp = Array(capacity + 1).fill(0);
    for (let i = 0; i < n; i++) {
        for (let w = capacity; w >= weights[i]; w--) {
            dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
        }
    }
    console.log("Maximum Value in Knapsack:", dp[capacity]);
}

knapsack([1, 2, 3], [60, 100, 120], 5);
