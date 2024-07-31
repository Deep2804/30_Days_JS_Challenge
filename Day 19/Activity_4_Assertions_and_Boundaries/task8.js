// Task 8: Write a regular expression to match a word only if it is at the end of the string. Log the matches.
const text = "Goodbye world";
const regex = /\b\w+\b$/;
const matches = text.match(regex);
console.log("Word at the end of the string:", matches);
