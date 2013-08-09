describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should add to children after addChild is called", function() {
    tree.addChild('first');
    expect(tree.children[0].value).toEqual('first');
    tree.addChild('second');
    expect(tree.children[1].value).toEqual('second');
    tree.children[0].addChild('first');
    expect(tree.children[0].children[0].value).toEqual('first');
  });

  // Add more tests here to test the functionality of tree.
});