describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve' and 'remove'", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
    expect(hashTable.remove).toEqual(jasmine.any(Function));
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  it("should insert and retrieve values when given keys", function(){
    hashTable.insert('hello', 'goodbye');
    expect(hashTable.retrieve('hello')).toEqual('goodbye');
  });

  it("should remove values when asked to", function(){
    hashTable.insert('hi', 'bye');
    hashTable.remove('hi');
    expect(hashTable.retrieve('hi')).toEqual(undefined);
  });

});
