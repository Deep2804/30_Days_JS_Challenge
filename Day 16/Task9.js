// Activity 5: Tree Traversal (Optional)
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they visited.
class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function inOrderTraversal(root) {
    if (root === null) {
      return;
    }
    inOrderTraversal(root.left);
    console.log(root.value);
    inOrderTraversal(root.right);
  }
  
  // Test case
  let root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
  inOrderTraversal(root); // 4, 2, 5, 1, 3
  