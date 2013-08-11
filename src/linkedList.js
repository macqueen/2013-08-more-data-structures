
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var indexer = 0;

  list.addToTail = function(value){
    if (list.head === null){
      list.head = list.tail = makeNode(value);
    } else {
      list.tail.next = makeNode(value);
      list.tail.next.prev = list.tail;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var value = list.head.value;
    list.head = list.head.next;
    list.head.prev = null;
    return value;
  };

  list.contains = function(target){
    return list.head.contains(target);
  };

  list.addToHead = function(value){
    if (list.head === null){
      list.head = list.tail = makeNode(value);
    } else {
      list.head.prev = makeNode(value);
      list.head.prev.next = list.head;
      list.head = list.head.prev;
    }
  };

  list.removeTail = function(){
    var value = list.tail.value;
    list.tail = list.tail.prev;
    list.tail.next = null;
    return value;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;
  node.contains = function(target) {
    return (this.value === target) || ( (!!this.next) && this.next.contains(target) ) ;
  };

  return node;
};
