// Node Structure
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// DoublyLinkedList Class
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add at end
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Remove last
  pop() {
    if (!this.tail) return null;

    const removed = this.tail;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }

    this.length--;
    return removed;
  }

  // Add at start
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  // Remove first
  shift() {
    if (!this.head) return null;

    const removed = this.head;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
      removed.next = null;
    }

    this.length--;
    return removed;
  }

  // Get node by index
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current, count;

    // Optimization: decide direction
    if (index <= this.length / 2) {
      current = this.head;
      count = 0;
      while (count < index) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while (count > index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  // Set value at index
  set(index, value) {
    const node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  // Insert at index
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const before = this.get(index - 1);
    const after = before.next;

    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;

    this.length++;
    return true;
  }

  // Remove at index
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removed = this.get(index);
    const before = removed.prev;
    const after = removed.next;

    before.next = after;
    after.prev = before;

    removed.next = null;
    removed.prev = null;

    this.length--;
    return removed;
  }

  // Convert to array (for debugging)
  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

// Usage
const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
console.log(list.toArray()); // [1, 2, 3]

list.unshift(0);
list.insert(2, 1.5);
list.set(3, 2.5);

console.log(list.toArray()); // [0, 1, 1.5, 2.5, 3]

list.remove(1); // remove node with value 1
list.pop();     // remove 3
list.shift();   // remove 0

console.log(list.toArray()); // [1.5, 2.5]
