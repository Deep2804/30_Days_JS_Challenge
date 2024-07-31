// Task 5: Write a regular expression to capture the area code, central office code, and line number from US phone number format(e.g., (123)456-7890). Log the captures.
const text = "(123)456-7890";
const regex = /^\((\d{3})\)(\d{3})-(\d{4})$/;
const matches = regex.exec(text);
if (matches) {
    console.log("Area code:", matches[1]);
    console.log("Central office code:", matches[2]);
    console.log("Line number:", matches[3]);
} else {
    console.log("No match found.");
}
