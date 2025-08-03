/** 
 * Merge Sort is a classic divide and conquer algorithm:
 * Divide the array into halves recursively.
 * Sort each half.
 * Merge the sorted halves.
 * 
 * Time complexity: O(n log n)
 * Space complexity: O(n)
*/
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let l = 0, r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }

  // Add remaining elements
  return result.concat(left.slice(l)).concat(right.slice(r));
}
