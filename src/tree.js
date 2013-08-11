
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
};

treeMethods.contains = function(target){
  return _.reduce(this.children, function(memo, child){
    return memo || child.contains(target);
  }, this.value === target);
};

treeMethods.removeFromParent = function(){
  var childPosition = this.parent.children.indexOf(this);
  this.parent.children.splice(childPosition, 1);
  this.parent = null;
  return this;
};
