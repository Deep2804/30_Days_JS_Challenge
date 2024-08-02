// Activity 1: Two Sum
// Task 1: Solve the two sum Problem on Leetcode.
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                return `index of numbers that add upto ${target} are ${i} and ${j}`;
            }
        }
    }
    return `No two numbers add upto ${target}`;
};

arrayToCheck = [2, 3, 4, 5];
console.log(twoSum(arrayToCheck, 9));

// Activity 2: Reverse Integer
// Task 2: Solve the reverse Integer problem on leetcode.
var reverse = function(x) {
    const isNegative = x < 0;
    let num = Math.abs(x);
    let reversed = 0;
  
    while (num > 0) {
      const digit = num % 10;
      reversed = reversed * 10 + digit;
      num = Math.floor(num / 10);
    }
  
    if (reversed > 2 ** 31 - 1) {
      return 0;
    }
  
    return isNegative ? -reversed : reversed;
  
};

console.log(reverse(-65535));

// Activity 3: Palindrome Number
// Task 3: Solve the Palindrome Number problem on Leetcode.
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let reverse = 0;
    let xcopy = x;

    while (x > 0) {
        reverse = (reverse * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    return reverse === xcopy;    
};
  
  console.log(isPalindrome(12321));
  console.log(isPalindrome(12345));


// Activity 4: merge Two Sorted Lists
// Task 4: Solve the Merge Two Sorted Lists Problem on Leetcode.
function ListNode(val, next) {
    this.val = val;
    this.next = null;
  }
  
  const mergeTwoLists = (list1, list2) => {
    let dummyNode = new ListNode(0);
    let current = dummyNode;
  
    while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    if (list1 !== null) {
      current.next = list1;
    }
  
    if (list2 !== null) {
      current.next = list2;
    }
  
    return dummyNode.next;
  };
  
  const createLinkedList = (arr) => {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  };
  
  const printList = (head) => {
    let current = head;
    let result = [];
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result.join(" -> "));
  };
  
  let list1 = createLinkedList([15, 34, 67]);
  let list2 = createLinkedList([11, 45, 53]);
  
  let mergedList = mergeTwoLists(list1, list2);
  
  printList(mergedList); // 11 -> 15 -> 34 -> 45 -> 53 -> 67
  
  console.log();
  
  list1 = createLinkedList([1, 2, 4]);
  list2 = createLinkedList([1, 3, 4]);
  
  mergedList = mergeTwoLists(list1, list2);
  printList(mergedList); // 1 -> 1 -> 2 -> 3 -> 4 -> 4

// Activity 5: Valid Parentheses.
// Task 5: Solve the Valid Parentheses Problem on Leetcode.
var isValid = function(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const c of s) {
        if (Object.values(mapping).includes(c)) {
            stack.push(c);
        } else if (mapping.hasOwnProperty(c)) {
            if (!stack.length || mapping[c] !== stack.pop()) {
                return false;
            }
        }
    }

    return stack.length === 0;    
};
console.log(isValid("()"));
console.log(isValid("(]"));
console.log(isValid("(]{}"));
console.log(isValid("(){}[]"));
console.log(isValid("(}{][)"));
