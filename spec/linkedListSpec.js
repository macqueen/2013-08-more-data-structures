describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should have a head node when there is one list node", function() {
    linkedList.addToTail('hello');
    expect(linkedList.head.value).toEqual('hello');
  });

  it("tail should equal head when there is one list node", function() {
    linkedList.addToTail('hello');
    expect(linkedList.head.value).toEqual(linkedList.tail.value);
  });

  it("head and tail should not equal eachother when there is more than one node", function() {
    linkedList.addToTail('hello');
    linkedList.addToTail('goodbye');
    expect(linkedList.head.value !== linkedList.tail.value).toEqual(true);
  });

  it("head should be connected to tail when there is more than one node", function() {
    linkedList.addToTail('hello');
    linkedList.addToTail('goodbye');
    expect(linkedList[linkedList.head.next].value === linkedList.tail.value).toEqual(true);

    linkedList.addToTail('why');
    expect(linkedList[linkedList[linkedList.head.next].next].value === linkedList.tail.value).toEqual(true);
  });
});