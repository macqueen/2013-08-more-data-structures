var makeSet = function(){
  var set = Object.create(makeSet.setMethods); // fix me
  set._storage = {};
  return set;
};

makeSet.setMethods = {};

makeSet.setMethods.add = function(value){
  this._storage[value] = null;
};

makeSet.setMethods.contains = function(value){
  for (var key in this._storage) {
    if (key === value) {
      return true;
    }
  }
  return false;
};

makeSet.setMethods.remove = function(value){
  delete this._storage[value];
};
