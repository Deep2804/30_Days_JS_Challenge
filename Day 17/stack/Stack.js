// Activity 2: Stack
// Task 3: Implement a Stack class with method push(add element), pop(remove element) and peek(view the top element).
// Task 4: Use the stack class to reverse a string by pushing all characters onto the stack and then pooping them off.

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
}

module.exports = Stack;
