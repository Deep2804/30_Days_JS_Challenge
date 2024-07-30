// Task 10: Write a function to solve the fibonacci sequences using dynamic programming. Log the fibonacci series.
function fibonacci(n) {
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    console.log("Fibonacci Series:", dp.slice(0, n + 1));
}

fibonacci(10);
