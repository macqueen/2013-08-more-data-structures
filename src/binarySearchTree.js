var BinarySearchTree = function(value){
  // left property, a binary search tree (BST) where all values are lower than than it the current value.
  this.left = null;

  // right property, a BST where all values are higher than than it the current value.
  this.right = null;
  this.value = value;

  //depth section:
  this.depth = 0;
  this.maxDepth = 0;
  this.minDepth = Math.POSITIVE_INFINITY;

};

// insert method, which accepts a value and places in the tree in the correct position.
BinarySearchTree.prototype.insert = function(value) {
  var topNode = this;
  var inserter = function() {
    if (this.value > value) {
      if (this.left === null){
        this.left = new BinarySearchTree(value);
        this.left.depth = this.depth + 1;
        if (this.left.depth > topNode.maxDepth) {
          topNode.maxDepth = this.left.depth;
        }
      } else {
        inserter.call(this.left);
      }
    } else if (this.value < value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
        this.right.depth = this.depth + 1;
        if (this.right.depth > topNode.maxDepth) {
          topNode.maxDepth = this.right.depth;
        }
      } else {
        inserter.call(this.right);
      }
    }
  };
  inserter.call(this);
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



BinarySearchTree.prototype.breadthFirstLog = function(obj) {
  // first, create necessary arrays - to search and found
  // add main tree + children to search array, remove main tree and add to the found array
  var toSearch = [this];
  var results = [];
  var node;
  while (toSearch.length > 0) {
    node = toSearch[0];
    node.left && toSearch.push(node.left);
    node.right && toSearch.push(node.right);
    obj ? results.push(node) : results.push(node.value);
    toSearch.splice(0, 1);
  }
  return results;
};