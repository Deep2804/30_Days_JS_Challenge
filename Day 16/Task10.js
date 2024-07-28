// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function treeDepth(root) {
    if (root === null) {
      return 0;
    }
    let leftDepth = treeDepth(root.left);
    let rightDepth = treeDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
  // Test case
  let root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
  console.log(treeDepth(root)); // 3
  
  root = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4))));
  console.log(treeDepth(root)); // 4
  