/**
 * Quick Sort is a highly efficient, divide-and-conquer sorting algorithm. It works by:
 * Picking a "pivot" element.
 * Partitioning the array: elements less than the pivot go to the left, greater go to the right.
 * Recursively sorting left and right parts
 * 
 * Time Compolexity:
 * - Best: O(n log n)
 * - Worst: O(n²)
 * 
 * Space Complexity: O(log n)
 */

function quickSortInPlace(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSortInPlace(arr, low, pi - 1);
    quickSortInPlace(arr, pi + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // swap pivot
  return i + 1;
}
