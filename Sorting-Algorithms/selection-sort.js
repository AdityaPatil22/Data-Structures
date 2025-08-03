/**
 * Selection Sort works by repeatedly finding the minimum element from the unsorted part of the array
 * and swapping it with the first unsorted element.
 * 
 * Time Complexity: O(n²)
 * Spack Comlexity: O(1)
 */

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find the minimum element in the unsorted part
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap if a smaller element was found
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}
