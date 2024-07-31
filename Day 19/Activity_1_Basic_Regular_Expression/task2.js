// Task 2: Write a regular expression to match all digits in a string. Log the matches.
const text = "My phone number is 123-456-7890.";
const regex = /\d+/g;
const matches = text.match(regex);
console.log("Matches for digits:", matches);
