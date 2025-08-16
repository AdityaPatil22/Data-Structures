/**
 * A Binary Search Tree is a binary tree with an ordering property
 *      - Left child values < parent value
 *      - Right child values > parent value
 *      - No duplicate values (in classic BST definition)
 * 
 *      8
       / \
      3   10
     / \    \
    1   6    14
       / \   /
      4   7 13
 *
 */



class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
}

// Traversals
// BST uses the same DFS/BFS syntax as Binary Trees, but Inorder Traversal has a special meaning

function inorder(node) {
  if (!node) return;
  inorder(node.left);
  console.log(node.val);
  inorder(node.right);
}

// Insert into BST
function insertIntoBST(root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
}

// Search in BST
function searchBST(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  if (val < root.val) return searchBST(root.left, val);
  return searchBST(root.right, val);
}

// Find Minimum & Maximum
function findMin(root) {
  while (root.left) root = root.left;
  return root.val;
}

function findMax(root) {
  while (root.right) root = root.right;
  return root.val;
}


// function deleteNode(root, key) {
function deleteNode(root, key) {
  if (!root) return null;
  
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // Case 1: No child
    if (!root.left && !root.right) return null;
    // Case 2: One child
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    // Case 3: Two children
    let minVal = findMinNode(root.right);
    root.val = minVal.val;
    root.right = deleteNode(root.right, root.val);
  }
  return root;
}

function findMinNode(node) {
  while (node.left) node = node.left;
  return node;
}

