

var HashTable = function() {
  this._limit = 8;
  // this._storage = LimitedArray(this._limit);
  this._storage = [];
};

// let getIndexBelowMaxForKey = function(key, limit) {
//   let index = parseInt(key[0], 32);
//   return Math.floor(index / 10);
// };

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index] = v;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[index];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index] = undefined;
};

// let ourHashTable = new HashTable();
// console.log(ourHashTable);
// console.log('GetIndexBelowMaxForKey: ' + getIndexBelowMaxForKey('val1', 8));


/*
 * Complexity: What is the time complexity of the above functions?
 */


