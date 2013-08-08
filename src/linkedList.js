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
      list.tail.next = makeNode(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var target = list[list.head.next];
    delete list[list.head.next];
    list.head = target;
  };

  list.contains = function(){
  };

  return list;
};

var makeNode = function(value, pointer){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
