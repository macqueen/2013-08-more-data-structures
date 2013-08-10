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
BinarySearchTree.prototype.contains = function(value, bool) {
  bool = bool || false;
  if (this.value === value || bool === true) {
    bool = true;
  } else if (this.value > value) {
    if (this.left === null) {
      return bool;
    } else {
    return this.left.contains(value, bool);
    }
  } else if (this.value < value) {
    if (this.right === null) {
      return bool;
    } else {
    return this.right.contains(value, bool);
    }
  }
  return bool;
};


// A .depthFirstLog() method, which accepts a callback and executes
// it on every value contained in the tree.
BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this);
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
};



BinarySearchTree.prototype.breadthFirstLog = function() {
  // first, create necessary arrays - to search and found
  // add main tree + children to search array, remove main tree and add to the found array
  var toSearch = [this];
  // var currentNode = toSearch[0];
  var results = [];
  while (toSearch.length) {
    toSearch[0].left && toSearch.push(toSearch[0].left);
    toSearch[0].right && toSearch.push(toSearch[0].right);
    results.push(toSearch.unshift());
  }
  console.log(results);
};