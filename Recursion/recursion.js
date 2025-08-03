/**
 * Basic structure of Recursion
 *  function recursiveFunction(args) {
        if (base case) {
            return result; // Stop recursion
        }
    return recursiveFunction(smaller problem);
    }
 */

// Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120


// Fibonacci
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8


// Sum of array
function sumArray(arr, i = 0) {
  if (i === arr.length) return 0;
  return arr[i] + sumArray(arr, i + 1);
}

console.log(sumArray([1, 2, 3, 4])); // 10


// Reverse string
function reverseString(str) {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // "olleh"

// Palindrome String
function isPalindrome(str, left = 0, right = str.length - 1) {
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return isPalindrome(str, left + 1, right - 1);
}

console.log(isPalindrome("racecar")); // true
