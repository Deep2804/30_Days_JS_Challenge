// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const text = "Alice went to the Wonderland. Bob was not there.";
const regex = /\b[A-Z][a-z]*\b/g;
const matches = text.match(regex);
console.log("Matches for words starting with a capital letter:", matches);
