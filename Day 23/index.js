// Activity 1: Median of two Sorted Arrays
// Task 1: Solve the Median of two Sorted Arrays problem on Leetcode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// Log the median for a few test cases, including edge cases.
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let x = nums1.length;
    let y = nums2.length;
    let low = 0;
    let high = x;

    while (low <= high) {
        let partitionX = Math.floor((low + high) / 2);
        let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        let maxX = (partitionX === 0) ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        let minX = (partitionX === x) ? Number.POSITIVE_INFINITY : nums1[partitionX];
        let maxY = (partitionY === 0) ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        let minY = (partitionY === y) ? Number.POSITIVE_INFINITY : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted");
};

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.00000
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.50000
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0.00000
console.log(findMedianSortedArrays([], [1])); // Output: 1.00000
console.log(findMedianSortedArrays([2], [])); // Output: 2.00000




// Activity 2: Merge k sorted Lists
// Task 2: Solve the Merge k Sorted Lists problem on Leetcode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the Linked lists into one sorted linked list.
// Create a few test cases with linked lists and log the merged list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var mergeKLists = function(lists) {
    if (!lists || lists.length === 0) return null;

    const minHeap = new MinHeap((a, b) => a.val - b.val);

    // Initialize the heap with the head nodes of each list
    for (let list of lists) {
        if (list !== null) {
            minHeap.insert(list);
        }
    }

    let dummy = new ListNode();
    let current = dummy;

    while (!minHeap.isEmpty()) {
        let smallestNode = minHeap.extract();
        current.next = smallestNode;
        current = current.next;
        if (smallestNode.next !== null) {
            minHeap.insert(smallestNode.next);
        }
    }

    return dummy.next;
};

class MinHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    insert(node) {
        this.heap.push(node);
        this.bubbleUp();
    }

    extract() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[index], this.heap[parentIndex]) < 0) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.compare(this.heap[leftChildIndex], this.heap[smallest]) < 0) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.compare(this.heap[rightChildIndex], this.heap[smallest]) < 0) {
                smallest = rightChildIndex;
            }
            if (smallest !== index) {
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            } else {
                break;
            }
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
};

// Helper function to create linked lists from arrays
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print linked lists
function printLinkedList(node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join('->'));
}

// Test cases
let lists = [
    createLinkedList([1, 4, 5]),
    createLinkedList([1, 3, 4]),
    createLinkedList([2, 6])
];
let mergedList = mergeKLists(lists);
printLinkedList(mergedList); // Output: 1->1->2->3->4->4->5->6

lists = [];
mergedList = mergeKLists(lists);
printLinkedList(mergedList); // Output: 

lists = [createLinkedList([])];
mergedList = mergeKLists(lists);
printLinkedList(mergedList); // Output: 



// Activity 3: Trapping Rain Water
// Task 3: Solve the Trapping Rain Water Problem on Leetcode.
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining
// Log the amount of trapped water for a few test cases. 
var trap = function(height) {
    if (!height || height.length === 0) return 0;

    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let waterTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }

    return waterTrapped;
};

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
console.log(trap([4,2,0,3,2,5])); // Output: 9
console.log(trap([1,0,1])); // Output: 1
console.log(trap([3, 0, 2, 0, 4])); // Output: 7
console.log(trap([5, 4, 1, 2])); // Output: 1





// Activity 4: N-Queens
// Task 4: Solve the N-Queens problem on Leetcode.
// Write a function that places in queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the in queens puzzle
// Log the distinct solutions for a few test cases
var solveNQueens = function(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    
    const isValid = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    };
    
    const placeQueens = (row) => {
        if (row === n) {
            solutions.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                placeQueens(row + 1);
                board[row][col] = '.';
            }
        }
    };
    
    placeQueens(0);
    return solutions;
};

// Test cases
console.log(solveNQueens(4)); 
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

console.log(solveNQueens(1)); 
// Output: [["Q"]]

console.log(solveNQueens(5));
// Example output: [["Q....","..Q..","....Q",".Q...","...Q."], ...]

console.log(solveNQueens(6));
// Example output: [["Q.....","..Q...","....Q.",".....Q",".Q....","...Q.."], ...]



// Activity 5: Word Ladder
// Task 5: Solve the Word Ladder problem on Leetcode.
// write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin ward to the end word such that only one letter can be changed at a time and
// each transformed word must exist in the word list. Log the length of the shortest transformation sequence for a few test cases.
var ladderLength = function(beginWord, endWord, wordList) {
    // Create a set of words for quick lookup
    const wordSet = new Set(wordList);
    
    // If the endWord is not in the word list, return 0
    if (!wordSet.has(endWord)) return 0;
    
    // Initialize the queue for BFS
    const queue = [[beginWord, 1]];
    
    while (queue.length > 0) {
        const [currentWord, level] = queue.shift();
        
        // If the current word is the end word, return the current level
        if (currentWord === endWord) return level;
        
        // Try changing each character of the current word
        for (let i = 0; i < currentWord.length; i++) {
            for (let c = 97; c <= 122; c++) { // 97 to 122 are ASCII values for 'a' to 'z'
                const newWord = currentWord.slice(0, i) + String.fromCharCode(c) + currentWord.slice(i + 1);
                
                // If the new word is in the word set, add it to the queue
                if (wordSet.has(newWord)) {
                    queue.push([newWord, level + 1]);
                    wordSet.delete(newWord); // Remove the word from the set to avoid revisiting
                }
            }
        }
    }
    
    // If we exhaust the queue without finding the end word, return 0
    return 0;
};

// Test cases
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Output: 5
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // Output: 0
console.log(ladderLength("a", "c", ["a","b","c"])); // Output: 2
console.log(ladderLength("game", "code", ["came","cane","cove","code"])); // Output: 4
console.log(ladderLength("start", "end", ["stark", "stack", "smack", "crack", "track", "trick", "brick", "brack", "back", "bank", "bark", "bark", "dark", "mark", "park", "pack", "pick", "pock", "dock", "mock", "lock", "lick", "like", "lake", "lace", "case", "base", "bake", "cake", "coke", "moke", "moat", "coat", "boat", "boot", "foot", "fort", "fart", "cart", "care", "cane", "cure", "coke", "cope", "code"])); // Output: 0 (Example to show complexity)
