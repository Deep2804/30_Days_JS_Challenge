// Activity 1: Class Definition
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message. 
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }

// const person1 = new Person("Deepak", 22);
// console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.


// Task 2: Add a method to the person class that updates the age property and logs the updated age.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Age updated to ${this.age}`);
    }
  }
  
  const person1 = new Person("Deepak", 22);
  console.log(person1.greet());
  person1.updateAge(21);
  

// Activity 2: Class Inheritance
// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the student class and log the student ID. 
class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    getStudentId() {
      return this.studentId;
    }
  }
  
  const student1 = new Student("Bob", 20, "S12345");
  console.log(student1.getStudentId());
  


// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    greet() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  
    getStudentId() {
      return this.studentId;
    }
  }
  
  const student1 = new Student("Bob", 20, "S12345");
  console.log(student1.greet());
  


// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Age updated to ${this.age}`);
    }
  
    static genericGreet() {
      return "Hello, this is a generic greeting message.";
    }
  }
  
  console.log(Person.genericGreet());
  

// Task 6: Add a static property to the Student class to keep track of the numbers of students created. Increment this property in the constructor and log the total numbers of students.
class Student extends Person {
    static studentCount = 0;
  
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
      Student.studentCount++;
      console.log(`Total number of students: ${Student.studentCount}`);
    }
  
    greet() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  
    getStudentId() {
      return this.studentId;
    }
  }
  
  const student1 = new Student("Bob", 20, "S12345");
  const student2 = new Student("Alice", 22, "S67890");
  

// Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name(assume a firstName and lastName property). Create an instance and log the full name using the getter.
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    greet() {
      return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
  }
  
  const person1 = new Person("Alice", "Johnson", 30);
  console.log(person1.fullName);
  




// Task 8: Add a setter method to the Person class to update the name properties(firstName and lastName). Update the name using the setter and log the updated full name.
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(name) {
      const [firstName, lastName] = name.split(" ");
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    greet() {
      return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
  }
  
  const person1 = new Person("Alice", "Johnson", 30);
  console.log(person1.fullName);
  person1.fullName = "Bob Smith";
  console.log(person1.fullName);
  




// Activity 5: Private Fields(Optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
    #balance;
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
      } else {
        console.log(`Withdrawal failed. Insufficient funds or invalid amount.`);
      }
    }
  
    get balance() {
      return this.#balance;
    }
  }
  
  const account1 = new Account(100);
  account1.deposit(50);
  account1.withdraw(30);
  console.log(`Final balance: ${account1.balance}`);
  

// Task 10: Create an instance of the Account class and test the deposit and withdraws method, logging the balance after each operaation.
const account1 = new Account(100);
account1.deposit(50);  // Deposited: 50. New balance: 150
account1.withdraw(30); // Withdrew: 30. New balance: 120
account1.withdraw(200); // Withdrawal failed. Insufficient funds or invalid amount.
console.log(`Final balance: ${account1.balance}`); // Final balance: 120
