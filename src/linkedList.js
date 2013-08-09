// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var indexer = 0;

  list.addToTail = function(value){
    if (list.head === null && list.tail === null){
      list.head = list.tail = makeNode(value);
    } else {
      list.tail = list.tail.next = makeNode(value);
    }
  };

  list.removeHead = function(){
    var value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  list.contains = function(target){
    var currentNode = list.head;
    while (currentNode.next !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value, pointer){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
