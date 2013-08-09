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

  it('contains should return true when the target node contains the value', function() {
    tree.value = 'first';
    expect(tree.contains('first')).toEqual(true);
  });

  it('should find values downstream of node when contains is called', function() {
    tree.addChild('first');
    tree.addChild('second');
    tree.addChild('third');
    tree.children[0].addChild('first 1');
    tree.children[0].addChild('first 2');
    tree.children[1].addChild('first 2');
    tree.children[1].children[0].addChild('first 3');
    expect(tree.contains('first 1')).toEqual(true);
    expect(tree.contains('first 3')).toEqual(true);
  });

  it('should know who its parent is', function(){
    tree.addChild(1);
    tree.children[0].addChild(2);
    tree.children[0].children[0].addChild(3);
    expect(tree.children[0].parent).toEqual(tree);
    expect(tree.parent).toEqual(null);
    expect(tree.children[0].children[0].children[0].parent.value).toEqual(2);
  });

  it('should disconnect a child when removeFromParent is called', function() {
    tree.addChild(1);
    tree.children[0].addChild(2);
    tree.children[0].addChild(3);
    tree.children[0].addChild(4);
    var removedChild = tree.children[0].children[0].removeFromParent();
    expect(tree.contains(2)).toEqual(false);
    expect(tree.contains(3)).toEqual(true);
    expect(removedChild.value).toEqual(2);
    expect(removedChild.parent).toEqual(null);
  });

});