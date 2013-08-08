// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var indexer = 0;

  list.addToTail = function(value){
    if (list.head === null && list.tail === null){
      list.head = list.tail = makeNode(value);
    } else if (list.head === list.tail) {
      list.tail = makeNode(value);
      list.head.next = 'tail';
    } else if (indexer === 0) {
      list[indexer] = list.tail;
      list[indexer].next = 'tail';
      list.head.next = indexer++;
      list.tail = makeNode(value);
    } else {
      list[indexer-1].next = list[indexer];
      list[indexer] = list.tail;
      list[indexer++].next = 'tail';
      list.tail = makeNode(value);
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
