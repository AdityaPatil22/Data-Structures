// Node Structure 
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Singly Linked List Class
class SinglyLinkedList {
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
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Remove last
  pop() {
    if (!this.head) return null;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = this.tail = null;
    }

    return current;
  }

  // Add at start
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // Remove first
  shift() {
    if (!this.head) return null;

    const removed = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return removed;
  }

  // Get node by index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current;
  }

  // Set value at index
  set(index, value) {
    let node = this.get(index);
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
    const prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  // Remove at index
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  // Print list as array
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}


// Usage 
const list = new SinglyLinkedList();

list.push(10);
list.push(20);
list.push(30);
console.log(list.toArray()); // [10, 20, 30]

list.unshift(5);
console.log(list.toArray()); // [5, 10, 20, 30]

list.pop(); // removes 30
list.shift(); // removes 5

list.insert(1, 15); // insert 15 at index 1
list.set(0, 100);   // set index 0 to 100
console.log(list.toArray()); // [100, 15, 20]

list.remove(1); // removes 15
console.log(list.toArray()); // [100, 20]


// Reversing a linked-list
var reverseList = function(head) {
    let curr = head
    let prev = null;
    let next;

    while(curr !== null){
        // Store next
        next = curr.next;

        // Reverse current node's next pointer
        curr.next = prev;

        // Move pointers one position ahead
        prev = curr;
        curr = next
    }

    return prev
};