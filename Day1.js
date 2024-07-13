// Activity 1: Variable Declaration
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
    var num = 13;
    console.log(num);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
    let str = "Deepak";
    console.log(str);

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
    const bool = true;
    console.log(bool);

// Activity 3: Data types:
// Task 4: Creates variables of different data types(number,string,boolean,object,array) and log each variables type using typeof operator.
    let number = 12;
    let string = "Deepak";
    let boolean = false;
    let object = {
        myName: "Deepak Singh",
        RollNo: 11,
        Age: 21 
    }
    let array = [12, false,"Deepak","Singh"]

    console.log(typeof(number));
    console.log(typeof(string));
    console.log(typeof(boolean));
    console.log(typeof(object));
    console.log(typeof(array));


// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value,and log both values to the console.
    let value = 15;
    console.log(value);
    value = 20;
    console.log(value);


// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
    const val = 100;
    console.log(val);
    val = 200;
    console.log(val);
// TypeError: Assignment to constant variable 
