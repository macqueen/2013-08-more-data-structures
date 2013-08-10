describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree =  new BinarySearchTree(10);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should place higher values to the right", function() {
    binarySearchTree.insert(15);
    binarySearchTree.insert(20);
    binarySearchTree.insert(25);
    expect(binarySearchTree.right.value).toEqual(15);
    expect(binarySearchTree.right.right.value).toEqual(20);
    expect(binarySearchTree.right.right.right.value).toEqual(25);
  });

  it("should place lower values to the left", function() {
    binarySearchTree.insert(7);
    binarySearchTree.insert(5);
    binarySearchTree.insert(3);
    expect(binarySearchTree.left.value).toEqual(7);
    expect(binarySearchTree.left.left.value).toEqual(5);
    expect(binarySearchTree.left.left.left.value).toEqual(3);
  });

});