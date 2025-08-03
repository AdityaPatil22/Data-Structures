// Native Queue using array
const nativeQueue = [];

nativeQueue.push(10);    // Enqueue
nativeQueue.push(20);
console.log(nativeQueue.shift()); // Dequeue → 10

nativeQueue[0];          // Peek → 20
nativeQueue.length === 0 // Is empty?


// Custom queue class Implementation
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  // Add item to end
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  // Remove item from front
  dequeue() {
    if (this.isEmpty()) return undefined;
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  // Get front item
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.front];
  }

  // Check if empty
  isEmpty() {
    return this.size() === 0;
  }

  // Number of elements
  size() {
    return this.rear - this.front;
  }

  // Clear queue
  clear() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  // Convert to array
  toArray() {
    return Object.values(this.items);
  }
}

// Usage
const queue = new Queue();

queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);

console.log(queue.dequeue()); // 100
console.log(queue.peek());    // 200
console.log(queue.size());    // 2
console.log(queue.isEmpty()); // false
console.log(queue.toArray()); // [200, 300]
