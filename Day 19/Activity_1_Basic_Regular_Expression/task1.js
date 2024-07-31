// Task 1: Write a regular expression to match a simple pattern (e.g. match all occurences of the word "Javascript" in a string). Log the matches.
const text = "I love Javascript. Javascript is a versatile language.";
const regex = /Javascript/g;
const matches = text.match(regex);
console.log("Matches for 'Javascript':", matches);
