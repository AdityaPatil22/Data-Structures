// Native Implementation using stack
const nativeStack = [];

nativeStack.push(10);  // Add to top
nativeStack.push(20);
console.log(nativeStack.pop()); // Remove top → 20

nativeStack[nativeStack.length - 1]; // Peek → 10
nativeStack.length === 0;      // Is empty?


// Custiom Stack Implementaion
class Stack {
  constructor() {
    this.items = {};
    this.top = 0;
  }

  // Add to top
  push(element) {
    this.items[this.top] = element;
    this.top++;
  }

  // Remove top element
  pop() {
    if (this.isEmpty()) return undefined;
    this.top--;
    const item = this.items[this.top];
    delete this.items[this.top];
    return item;
  }

  // Return top element without removing
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.top - 1];
  }

  // Return current size
  size() {
    return this.top;
  }

  // Check if empty
  isEmpty() {
    return this.top === 0;
  }

  // Clear the stack
  clear() {
    this.items = {};
    this.top = 0;
  }

  // Convert to array (for debugging)
  toArray() {
    return Object.values(this.items);
  }
}

// Usage
const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);

console.log(stack.pop());   // 15
console.log(stack.peek());  // 10
console.log(stack.size());  // 2
console.log(stack.isEmpty()); // false
console.log(stack.toArray()); // [5, 10]
