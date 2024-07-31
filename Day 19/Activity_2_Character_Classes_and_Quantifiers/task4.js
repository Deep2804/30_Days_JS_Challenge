// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const text = "There are 12 apples, 30 oranges, and 7 bananas.";
const regex = /\d+/g;
const matches = text.match(regex);
console.log("Matches for sequences of digits:", matches);
