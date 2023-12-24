const { NotImplementedError } = require('../extensions/index.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this._insert(this.rootNode, data);
  }

  _insert(node, data) {
    if (node === null) {
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
    return this._search(this.rootNode, data);
  }

  _search(node, data) {
    if (node === null) {
      return false;
    }

    if (data === node.data) {
      return true;
    } else if (data < node.data) {
      return this._search(node.left, data);
    } else {
      return this._search(node.right, data);
    }
  }

  find(data) {
    return this._find(this.rootNode, data);
  }

  _find(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this._find(node.left, data);
    } else {
      return this._find(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this._remove(this.rootNode, data);
  }

  _remove(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      // Node with only one child or no child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Node with two children
      node.data = this._getMinValue(node.right);
      node.right = this._remove(node.right, node.data);
    } else if (data < node.data) {
      node.left = this._remove(node.left, data);
    } else {
      node.right = this._remove(node.right, data);
    }

    return node;
  }

  _getMinValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  min() {
    return this._getMinValue(this.rootNode);
  }

  max() {
    return this._getMaxValue(this.rootNode);
  }

  _getMaxValue(node) {
    let current = node;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
