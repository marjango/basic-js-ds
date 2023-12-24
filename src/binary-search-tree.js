const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = this._insert(this._root, data);
}

_insert(node, data) {
  if (!node) {
    return new Node(data);
  }

  if (data < node.data) {
    node.left = this._insert(node.left, data);
  } else if (data > node.data) {
    node.right = this._insert(node.right, data);
  }

  return node;
  }

  has(data) {
    return this._search(this._root, data) !== null;
  }
  
  _search(node, data) {
    if (!node || node.data === data) {
      return node;
    }
  
    if (data < node.data) {
      return this._search(node.left, data);
    } else {
      return this._search(node.right, data);
    }
  }  

  find(data) {
    return this._search(this._root, data);
  }
  
  remove(data) {
    this._root = this._remove(this._root, data);
  }
  
  _remove(node, data) {
    if (!node) {
      return null;
    }
  
    if (data < node.data) {
      node.left = this._remove(node.left, data);
    } else if (data > node.data) {
      node.right = this._remove(node.right, data);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }
  
      node.data = this._findMin(node.right).data;
      node.right = this._remove(node.right, node.data);
    }
  
    return node;
  }
  
  _findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }  

  min() {
    return this._findMin(this._root).data;
  }
  
  max() {
    return this._findMax(this._root).data;
  }
  
  _findMax(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }
  
}

module.exports = {
  BinarySearchTree
};