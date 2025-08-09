/**
 * A HashMap is a data structure that stores key-value pairs, allowing fast insertion, deletion, and lookup (typically O(1))
 * Time complexity:
 * - Best: O(1)
 * - Worst: O(n)
 * 
 * pre storing and then fetching
 */

// JavaScript built-in function
let m = new Map();

m.set("apple", 5);
m.set("banana", 10);

console.log(m.get("apple"));   // 5
console.log(m.has("banana"));  // true
console.log(m.size);           // 2

m.delete("apple");
console.log(m.has("apple"));   // false

// Iterate
for (let [key, value] of m) {
  console.log(key, value);
}

// HashMap Class
class HashMap {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    return hash(key, this.keyMap.length);
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    // Update if key already exists
    for (let pair of this.keyMap[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.keyMap[index];
    if (bucket) {
      for (let pair of bucket) {
        if (pair[0] === key) return pair[1];
      }
    }
    return undefined;
  }

  has(key) {
    return this.get(key) !== undefined;
  }

  delete(key) {
    const index = this._hash(key);
    const bucket = this.keyMap[index];
    if (bucket) {
      const i = bucket.findIndex(pair => pair[0] === key);
      if (i !== -1) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  keys() {
    const keysArr = [];
    for (let bucket of this.keyMap) {
      if (bucket) {
        for (let pair of bucket) {
          keysArr.push(pair[0]);
        }
      }
    }
    return keysArr;
  }

  values() {
    const valuesArr = [];
    const seen = new Set();
    for (let bucket of this.keyMap) {
      if (bucket) {
        for (let pair of bucket) {
          if (!seen.has(pair[1])) {
            seen.add(pair[1]);
            valuesArr.push(pair[1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

// Usage
const map = new HashMap();

map.set("apple", 5);
map.set("banana", 10);
map.set("orange", 15);

console.log(map.get("apple"));     // 5
console.log(map.get("banana"));    // 10
console.log(map.has("banana"));    // true
console.log(map.keys());           // [ 'apple', 'banana', 'orange' ]
console.log(map.values());         // [ 5, 10, 15 ]

map.delete("banana");
console.log(map.get("banana"));    // undefined
