/**
 * It involves creating a window (a subset of the array or string) that slides over the input 
 * to examine different parts—often maintaining some property like sum, length, or count
 * 
 * Use it when: You're asked to find subarrays/substrings of a certain length or condition
 * Types of Sliding Window: Fixed-size Window and Variable size window
 * 
 * Time complexity: O(n) or O(n + m)
 */

// Fixed size sliding window
function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let windowSum = 0;

    // Calculate sum of first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k]; // add next, remove first
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9


// Varible size sliding window
function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
