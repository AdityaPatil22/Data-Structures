/**
 * Big-O of built-in methods
 *  push/pop: O(1)
 *  shift/unshift/splice: O(n)
 *  map/filter/reduce: O(n)
 * Use cases: Contiguous memory storage, quick lookups by index, stack (push/pop), queue (shift/push).
 */

let arr = [1, 2, 3, 4];

// Common array methods
arr.push(5);        // Add to end → [1,2,3,4,5]
arr.pop();          // Remove last → [1,2,3,4]
arr.unshift(0);     // Add to start → [0,1,2,3,4]
arr.shift();        // Remove first → [1,2,3,4]
arr.splice(2, 1);   // Remove 1 element at index 2 → [1,2,4]
arr.slice(1, 3);    // Copy from index 1 to 2 → [2,4]
arr.indexOf(2);     // Find index of value 2 → 1
arr.includes(4);    // Check if value exists → true
arr.reverse();      // Reverse the array
arr.sort();         // Sort alphabetically
arr.map(x => x * 2);      // Create new array with doubled values
arr.filter(x => x > 2);   // Filter values
arr.reduce((a, b) => a + b);  // Sum of all


