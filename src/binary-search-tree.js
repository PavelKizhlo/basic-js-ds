const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootOfTree = null;
  }

  root() {
    return this.rootOfTree;
  }

  add(data) {
    this.rootOfTree = addData(this.rootOfTree, data);

    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }

      return node;
    }
  }

  has(data) {

  }

  find(data) {

  }

  remove(data) {

  }

  min() {

  }

  max() {

  }
}

module.exports = {
  BinarySearchTree
};

// let bst = new BinarySearchTree();
// bst.add(1);
// bst.add(3);
// bst.add(2);
// bst.add(5);
// bst.add(7);

// console.log(bst.root.right)
