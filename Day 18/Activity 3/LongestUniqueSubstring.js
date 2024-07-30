// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function longestUniqueSubstring(str) {
    let start = 0, maxLength = 0, usedChars = new Map();
    for (let end = 0; end < str.length; end++) {
        if (usedChars.has(str[end])) {
            start = Math.max(usedChars.get(str[end]) + 1, start);
        }
        usedChars.set(str[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    console.log("Longest Substring Length:", maxLength);
}

longestUniqueSubstring("abcabcbb");
