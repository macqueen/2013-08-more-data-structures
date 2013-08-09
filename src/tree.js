
// .children property, an array containing a number of subtrees
// .addChild() method, takes any value, sets that as the target of a node,
  //and adds that node as a child of the tree
// A .contains() method, takes any input and returns a boolean reflecting
  //whether it can be found as the value of the target node


var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(obj1, obj2){
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = makeTree(value);
  newChild.parent = this;
  this.children.push(newChild);
  //this.children.push(makeTree(value));
};

treeMethods.contains = function(target, flag){
  flag = flag || false;
  if (this.value === target || flag === true) {
    flag = true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      flag = this.children[i].contains(target, flag);
    }
  }
  return flag;
};

treeMethods.removeFromParent = function(){
  var child = this;
  var childPosition = child.parent.children.indexOf(child);
  child.parent.children.splice(childPosition, 1);
  child.parent = null;
  return child;
};
