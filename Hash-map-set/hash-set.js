/**
 * A HashSet is a collection of unique values — it doesn’t allow duplicates. It supports fast operations like:
 * add(value)
 * has(value)
 * delete(value)
 * size()
 * values()
 * 
 * Time Complexity: O(1)
 */

// Use JavaScript's Built-in Set
const set = new Set();

set.add("apple");
set.add("banana");
set.add("apple"); // duplicate, won't be added

console.log(set.has("banana")); // true
console.log(set.has("grape"));  // false

set.delete("banana");

console.log(set.size); // 1
console.log([...set]); // [ 'apple' ]


// Custom HashSet Class
class HashSet {
  constructor(size = 53) {
    this.data = new Array(size);
  }

  _hash(value) {
    const str = String(value);
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(str.length, 100); i++) {
      const char = str.charCodeAt(i) - 96;
      total = (total * PRIME + char) % this.data.length;
    }
    return total;
  }

  add(value) {
    const index = this._hash(value);
    if (!this.data[index]) {
      this.data[index] = [];
    }

    for (let v of this.data[index]) {
      if (v === value) return; // already exists
    }

    this.data[index].push(value);
  }

  has(value) {
    const index = this._hash(value);
    const bucket = this.data[index];
    if (bucket) {
      for (let v of bucket) {
        if (v === value) return true;
      }
    }
    return false;
  }

  delete(value) {
    const index = this._hash(value);
    const bucket = this.data[index];
    if (bucket) {
      const i = bucket.indexOf(value);
      if (i !== -1) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  values() {
    const result = [];
    for (let bucket of this.data) {
      if (bucket) {
        result.push(...bucket);
      }
    }
    return result;
  }

  size() {
    let count = 0;
    for (let bucket of this.data) {
      if (bucket) count += bucket.length;
    }
    return count;
  }
}

// Usage
const set1 = new HashSet();

set1.add("apple");
set1.add("banana");
set1.add("apple");

console.log(set1.has("banana"));  // true
console.log(set1.has("grape"));   // false
console.log(set1.values());       // [ 'apple', 'banana' ]
console.log(set1.size());         // 2

set1.delete("banana");
console.log(set1.values());       // [ 'apple' ]
