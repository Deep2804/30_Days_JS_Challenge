// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using for loop.
for(let i=1;i<=10;i++){
    console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
for(let i=1;i<=10;i++){
    console.log("5 *",i,"=",5*i);
}


// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop. 
// 
let sum = 0;
let n = 1;
while(n <= 10){
    sum += n;
    n++;
}
console.log(sum);


// Task 4: Write a program to print numbers from 10 to 1 using while loop.
let i = 10;
while(i>0){
    console.log(i);
    i--;
}


// Activity 3: Do..while Loop
// Task 5: Write a program to print numbers from 1 to 5 using do..while loop.
let number = 1;
do{
    console.log(number); 
    number++;
} while(number<=5);


// Task 6: Write a program to calculate the factorial of numbers using a do..while loop.
let num1 = 5;
let factorial = 1;
let currentNum1 = num1;
do {
    factorial *= currentNum1;
    currentNum1--;
} while(currentNum1 > 0);

console.log(factorial);



// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loop.
let pattern = "";
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        pattern += "*";
    }
    console.log(pattern);
    
}


// Activity 5: Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using continue statement.
for(let i=1;i<=10;i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}


// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using break statement.
for(let i=1;i<=10;i++){
    if(i === 7){
        break;
    }
    console.log(i);
}