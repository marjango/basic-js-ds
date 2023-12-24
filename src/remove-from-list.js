const { NotImplementedError } = require('../extensions/index.js');

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 */
function removeKFromList(l, k) {
  if (!l) {
    return null;
  }

  // Create a dummy node to simplify the removal of the head node
  const dummy = new ListNode(0);
  dummy.next = l;

  let current = dummy;

  // Iterate through the list
  while (current.next) {
    if (current.next.value === k) {
      // Remove the node with value k
      current.next = current.next.next;
    } else {
      // Move to the next node
      current = current.next;
    }
  }

  // Return the updated list
  return dummy.next;
}

module.exports = {
  removeKFromList
};