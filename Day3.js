// Activity 1: If-else Statements

// Task 1: Write a program to check if a number is positive, negative or zero, and log the result to the console.
let num = 123;
if(num == 0){
    console.log("Zero");
} else if(num >0){
    console.log("Positive Number");
} else {
    console.log("Negative Number");
}



// Task 2: Write a program to check if a person is eligible to vote(age >= 18), and log the result to the console.
let age = 16;
if(age >= 18){
    console.log("Eligible for Voting");
} else{
    console.log("Not Eligible for Voting");
}

// Activity 2: Nested If-else Statement
// Task 3: Write a program to find largest of three numbers using nested if-else statements
let a=22, b=14, c=19;
if(a>b){
    if(a>c){
        console.log(`${a} is largest`);
    }
    else {
        console.log(`${c} is largest`);
    }
}
else {
    if(b>c){
        console.log(`${b} is largest`);
    }
    else {
        console.log(`${c} is largest`);
    }
    
}


// Activity 3: Switch Case
// Task 4: Write a program that use a switch case to determine the day of the week based on a number(1-7) and log the day name to the console.
let day = 5;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:    
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7: 
        console.log("Saturday");
        break;
    default:
        console.log("Not a valid Day"); 
        break;                      
}


// Task 5: Write a program that use a switch case to assign a grade (A,B,C,D,E,F) based on the score and log the grade to the console.
let score = 45;
switch(true){
    case (score >90 && score<=100):
        console.log("A");
        break;
    case (score >80 && score<=90):    
        console.log("B");
        break;
    case (score >70 && score<=80):
        console.log("C");
        break;
    case (score >60 && score<=70):
        console.log("D");
        break;
    case (score >50 && score<=60):
        console.log("E");
        break;
    case (score >30 && score<=50):
        console.log("F");
        break;
    default:
        console.log("Not a valid Grade"); 
        break;                      
}


// Activity 4: Conditional(Ternary) Operator
// Task 6: Write a program that uses ternary operator to check if a number is even or odd and log the result to the console.
let number = 123;
let result = number%2 == 0 ? "even" : "odd";
console.log(result);


// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is leap year using multiple conditions(divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 1957;
if((year%4 == 0 && year%100 != 0)  || year%400 == 0){
   
    console.log(`${year} is Leap Year`);
       
} 
else {
    console.log(`${year} is not a Leap year`);
}


// Feature Request
// 1. Number check script: Write a script that checks  if a number is positive,negative or zero using if-else statements and logs the result.
// 2. Voting Eligibility Script: Create a script to check if a person is eligible for vote based on thier age and log the result. 
// 3. Day of the Week script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. Leap year check script: Write a script that checks if a year is leap year using multiple conditions and logs the result.
