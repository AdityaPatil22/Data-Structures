/**
 * Bubble Sort is a simple comparison-based sorting algorithm. 
 * It repeatedly steps through the list, compares adjacent elements, and swaps them if they're in the wrong order. 
 * The largest values "bubble up" to the end
 * 
 * Time Complexity:
 * - Best: O(n)
 * - Worst: O(n²)
 * Space Complexity
 * - O(1)
 */

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swapped = true;
      }
    }
    n--; // Reduce range after each pass
  } while (swapped);

  return arr;
}

