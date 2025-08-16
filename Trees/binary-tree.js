/**
 * A Tree is a non-linear hierarchical data structure consisting of nodes connected by edges
 *      Non-linear → Elements are not stored in a sequence.
 *      Hierarchical → One node is the root, and all other nodes are children of some node
 * 
 *      A         ← Root
       / \
      B   C       ← Children of A
     / \   \
    D   E   F     ← Leaf nodes (no children)

 * A Binary Tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child.
 * 
 * Termininology:
 *      - Node: An element of the tree.
 *      - Edge: The connection between two nodes.
 *      - Root: The top node of the tree.
 *      - Leaf: A node with no children.
 *      - Height: The length of the longest path from the root to a leaf.
 *      - Depth: The length of the path from the root to a node.
 *      - Parent: A node that has child nodes
 *      - Child: A node that is a descendant of another node.
 *      - Subtree: A tree formed by a node and its descendants.
 * 
 * Properties:
 *      - A binary tree can be empty (no nodes).
 *      - Each node can have 0, 1, or 2 children.
 *      - The left child is always less than the parent node, and the right child is always greater than the parent node in a Binary Search Tree (BST).
 *
 * Operations:
 *      - Insertion: Adding a new node to the tree.
 *      - Deletion: Removing a node from the tree.
 *      - Traversal: Visiting all nodes in a specific order (e.g., in-order, pre-order, post-order).
 *      - Searching: Finding a node with a specific value.
 * 
 * Types of Binary Trees:
 *      - General Binary Tree: Each node can have up to two children.
 *      - Full Binary Tree: Every node other than the leaves has two children.
 *      - Complete Binary Tree: All levels are fully filled except possibly the last level, which is filled from left to right.
 *      - Perfect Binary Tree: All internal nodes have two children and all leaves are at the same level.
 *      - Balanced Binary Tree: The height of the left and right subtrees of any node differ by at most one.
 *      - Binary Search Tree (BST): A binary tree where for each node, all values in the left subtree are less than the node's value, and all values in the right subtree are greater.
 *      - AVL Tree: A self-balancing binary search tree where the difference in heights between left and right subtrees is at most one.
 *      - Red-Black Tree: A balanced binary search tree with an additional property that ensures the tree remains balanced during insertions and deletions.
 */

// Representing Trees in JavaScript
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Example of a Binary Tree
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);


// DFS Traversals (Recursive)
// Preorder (Node → Left → Right)

function preorder(node) {
  if (!node) return;
  console.log(node.val);      // Visit node
  preorder(node.left);
  preorder(node.right);
}

// Inorder (Left → Node → Right)
function inorder(node) {
  if (!node) return;
  inorder(node.left);
  console.log(node.val);
  inorder(node.right);
}

// Postorder (Left → Right → Node)
function postorder(node) {
  if (!node) return;
  postorder(node.left);
  postorder(node.right);
  console.log(node.val);
}


// DFS Traversals (Iterative)
// Preorder Iterative
function preorderIterative(root) {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    console.log(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}


// Inorder Iterative
function inorderIterative(root) {
  const stack = [];
  let curr = root;
  while (stack.length || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    console.log(curr.val);
    curr = curr.right;
  }
}


// BFS Traversal
function bfs(root) {
  if (!root) return;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift(); // dequeue
    console.log(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}


// Common Utility Patterns

// Max Depth
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// Min Depth
function minDepth(root) {
  if (!root) return 0;
  if (!root.left) return 1 + minDepth(root.right);
  if (!root.right) return 1 + minDepth(root.left);
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}

// Search in BST
function searchBST(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  if (val < root.val) return searchBST(root.left, val);
  return searchBST(root.right, val);
}
