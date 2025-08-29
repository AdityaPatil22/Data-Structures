// Creating a 2D array
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Access
console.log(arr[0][0]); // 1
console.log(arr[2][1]); // 8

// Dimensions
let rows = arr.length;       // number of rows
let cols = arr[0].length;    // number of columns


// Row-wise Traversal
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    console.log(arr[i][j]);
  }
}
// Column-wise Traversal
for (let j = 0; j < arr[0].length; j++) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i][j]);
  }
}

// Flattening a 2D array
let flatArray = arr.flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Search in 2D Array
function search2D(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === target) return [i, j];
    }
  }
  return [-1, -1];
}


// Sum of Rows / Columns
// Row sum
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = 0; j < arr[0].length; j++) sum += arr[i][j];
  console.log("Row", i, "sum:", sum);
}

// Column sum
for (let j = 0; j < arr[0].length; j++) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i][j];
  console.log("Col", j, "sum:", sum);
}


// Transpose of Matrix
function transpose(matrix) {
  let n = matrix.length, m = matrix[0].length;
  let result = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}
