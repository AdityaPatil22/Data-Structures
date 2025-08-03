/**
 * Insertion Sort builds the final sorted array one element at a time by taking each item and inserting 
 * it into its correct position in the already-sorted part.
 * 
 * Time Complexity: 
 * - Best: O(n)
 * - Worst: O(n²)
 * 
 * Space Complexity: O(1)
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    // Shift elements that are greater than current to the right
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert current element at the correct position
    arr[j + 1] = current;
  }

  return arr;
}
