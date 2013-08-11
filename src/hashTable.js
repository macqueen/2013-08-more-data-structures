var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined) {
    this._storage.set(i, [[k, v]]);
  } else {
    this._storage.get(i).push([k, v]);
    _.uniq(this._storage.get(i));
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var searchArr = this._storage.get(i);
  for (var j = 0; j < searchArr.length; j++){
    if (searchArr[j][0] === k) {
      return searchArr[j][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var searchArr = this._storage.get(i);
  for (var j = 0; j < searchArr.length; j++){
    if (searchArr[j][0] === k) {
      searchArr[j].splice(j, 1);
    }
  }
  this._storage.set(i, searchArr);
};
