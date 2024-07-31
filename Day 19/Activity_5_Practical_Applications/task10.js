// Task 10: Write a regular expression to validate a simple URL. Log whether the URL is valid.
const url = "https://www.example.com";
const regex = /^(https?:\/\/)?([\w\d-]+\.)+[\w\d-]+(\/[\w\d-]+)*\/?$/;
const isValid = regex.test(url);
console.log("Is the URL valid?", isValid);
