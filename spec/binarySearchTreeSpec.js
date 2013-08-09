describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree =  new BinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should place higher values to the right", function() {
    binarySearchTree.insert(10);
    binarySearchTree.insert(15);
    binarySearchTree.insert(20);
    expect(binarySearchTree.right.value).toEqual(15);
    expect(binarySearchTree.right.right.value).toEqual(20);
  });

});