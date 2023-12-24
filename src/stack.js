const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    // Add the element to the top of the stack
    this.elements.push(element);
  }

  pop() {
    // Remove and return the top element from the stack
    return this.elements.pop();
  }

  peek() {
    // Return the top element without removing it
    return this.elements[this.elements.length - 1];
  }
}

module.exports = {
  Stack
};
