// Task 6: Write a function to count the occurences of each character in a string. Log the character count.
function countCharacters(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    console.log("Character Count:", charCount);
}

countCharacters("hello world");
