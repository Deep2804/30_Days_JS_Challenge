// Task 9: Write a regular expression to validate a simple password(must include atleast one uppercase letter, one lowercase letter, one digit and one special character). Log whether the password is valid. 
const password = "Password1@";
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isValid = regex.test(password);
console.log("Is the password valid?", isValid);
