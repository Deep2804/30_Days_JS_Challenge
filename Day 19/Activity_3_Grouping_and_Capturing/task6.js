// Task 6: Write a regular expression to capture the username and domain from a email address. Log the captures.
const text = "user@example.com";
const regex = /^(\w+)@(\w+\.\w+)$/;
const matches = regex.exec(text);
if (matches) {
    console.log("Username:", matches[1]);
    console.log("Domain:", matches[2]);
} else {
    console.log("No match found.");
}
