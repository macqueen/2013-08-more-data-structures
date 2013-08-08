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
});