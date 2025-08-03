// Node structure 
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Circular Singly Linked List Class
class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add to end
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head; // Point to itself
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head; // Make it circular
    }
    this.length++;
  }

  // Add at start
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head; // Update tail to point to new head
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
      this.head = this.head.next;
      this.tail.next = this.head;
    }
    this.length--;
    return removed;
  }

  // Remove last
  pop() {
    if (!this.head) return null;

    const removed = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = this.head;
      this.tail = current;
    }
    this.length--;
    return removed;
  }

  // Print list (with safety to avoid infinite loop)
  toArray() {
    const result = [];
    if (!this.head) return result;

    let current = this.head;
    do {
      result.push(current.value);
      current = current.next;
    } while (current !== this.head);

    return result;
  }

  // Check if list contains a value
  contains(value) {
    if (!this.head) return false;

    let current = this.head;
    do {
      if (current.value === value) return true;
      current = current.next;
    } while (current !== this.head);

    return false;
  }
}

// Usage
const list = new CircularLinkedList();

list.push(10);
list.push(20);
list.push(30);
console.log(list.toArray()); // [10, 20, 30]

list.unshift(5);
console.log(list.toArray()); // [5, 10, 20, 30]

list.pop();    // removes 30
list.shift();  // removes 5

console.log(list.toArray()); // [10, 20]
console.log(list.contains(20)); // true
console.log(list.contains(99)); // false
