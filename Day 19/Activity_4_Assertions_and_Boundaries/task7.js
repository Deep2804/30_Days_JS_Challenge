// Task 7: Write a regular expression to match a word only if it is at the beginning of the string. Log the matches.
const text = "Hello world";
const regex = /^\b\w+\b/;
const matches = text.match(regex);
console.log("Word at the beginning of the string:", matches);
