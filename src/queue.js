const { NotImplementedError, ListNode } = require('../extensions/index.js');

class Queue {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  getUnderlyingList() {
    return this._head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this._head) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }
  }

  dequeue() {
    if (!this._head) {
      return null; // If the queue is empty, return null
    }

    const removedValue = this._head.value;
    this._head = this._head.next;

    if (!this._head) {
      this._tail = null; // If the last element is dequeued, update the tail
    }

    return removedValue;
  }
}

module.exports = {
  Queue
};
