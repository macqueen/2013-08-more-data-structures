var BinarySearchTree = function(value){
  // left property, a binary search tree (BST) where all values are lower than than it the current value.
  this.left = null;

  // right property, a BST where all values are higher than than it the current value.
  this.right = null;
  this.value = value;

};

// insert method, which accepts a value and places in the tree in the correct position.
BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value) {
    if (this.left === null){
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (this.value < value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }

};


//contains() method, which accepts a value and returns a boolean
// reflecting whether or not the value is contained in the tree.
BinarySearchTree.prototype.contains = function() {

};


// A .depthFirstLog() method, which accepts a callback and executes
// it on every value contained in the tree.
BinarySearchTree.prototype.depthFirstLog = function() {

};