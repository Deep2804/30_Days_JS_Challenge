// Activity 1: Add Two Numbers
// Task 1: Solve the Add Two Numbers on Leetcode.
// Write a function that takes two non-empty linked lists representing two non-negative integer. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list. 
// Create a few test cases with linked lists and log the sum as a linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummy.next;
};

// Test cases
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function printLinkedList(list) {
    let arr = [];
    while (list !== null) {
        arr.push(list.val);
        list = list.next;
    }
    console.log(arr);
}

let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let result = addTwoNumbers(l1, l2);
printLinkedList(result); // Output: [7, 0, 8]

l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
result = addTwoNumbers(l1, l2);
printLinkedList(result); // Output: [0]

l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
result = addTwoNumbers(l1, l2);
printLinkedList(result); // Output: [8, 9, 9, 9, 0, 0, 0, 1]



// Activity 2: Longest Substring without Repeating Characters 
// Task 2: Solve the Longest Substring without Repeating Character on Leetcode.
// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// Log the length for a few test cases, including edge cases.
var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let maxLength = 0;
    let start = 0;
    let charIndexMap = new Map();

    for (let end = 0; end < n; end++) {
        let char = s[end];
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }
        charIndexMap.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
console.log(lengthOfLongestSubstring(""));         // Output: 0
console.log(lengthOfLongestSubstring(" "));        // Output: 1
console.log(lengthOfLongestSubstring("au"));       // Output: 2
console.log(lengthOfLongestSubstring("dvdf"));     // Output: 3




// Activity 3: Container with most water
// Task 3: Solve the Container with most water problem on Leetode.
// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
// Log the maximum amount of water for a few test cases.
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let width = right - left;
        let currentHeight = Math.min(height[left], height[right]);
        let currentArea = width * currentHeight;
        maxArea = Math.max(maxArea, currentArea);

        // Move the pointer of the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1]));                     // Output: 1
console.log(maxArea([4, 3, 2, 1, 4]));            // Output: 16
console.log(maxArea([1, 2, 1]));                  // Output: 2
console.log(maxArea([2, 3, 10, 5, 7, 8, 9]));     // Output: 36



// Activity 4: 3 Sum
// Task 4: Solve the 3Sum problem on Leetcode.
// Write a function that takes an array of integers and finds all unique triplets in the array which gives the sum of zero.
// Log the triplets for a few test cases, including edge cases.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate elements

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicate elements
                while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicate elements
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1]));             // Output: []
console.log(threeSum([0, 0, 0]));             // Output: [[0,0,0]]
console.log(threeSum([-2, 0, 1, 1, 2]));      // Output: [[-2,0,2],[-2,1,1]]
console.log(threeSum([]));                    // Output: []
console.log(threeSum([0, 0, 0, 0]));          // Output: [[0,0,0]]




// Activity 5: Group Anagrams
// Task 5: Solve the Group Anagrams Problem on Leetcode.
// Write a function that takes an array of strings and groups anagrams together. 
// Log the grouped anagrams for a few test cases.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    
    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
    
    return Array.from(map.values());
};

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams([""])); 
// Output: [[""]]

console.log(groupAnagrams(["a"])); 
// Output: [["a"]]

console.log(groupAnagrams(["abc", "bca", "cab", "xyz", "zyx", "pqr"])); 
// Output: [["abc","bca","cab"],["xyz","zyx"],["pqr"]]

console.log(groupAnagrams(["abcd", "dcba", "abcd", "dabc", "xyyx", "yyxx", "yxxy"])); 
// Output: [["abcd","dcba","abcd","dabc"],["xyyx","yyxx","yxxy"]]
