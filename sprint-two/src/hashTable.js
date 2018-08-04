let HashTable = function() {
  this._limit = 8;
  // this._storage = LimitedArray(this._limit);
  this._storage = [];
};

HashTable.prototype.insert = function(k, v) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  
  let bucket = this._storage[index];

  if (this._storage[index] === undefined) {
    this._storage[index] = DoublyLinkedList();
    this._storage[index].addToTail([k, v]);
  } else if (this._storage[index].retrieveTuple(k) !== -1) {
    this._storage[index].retrieveTuple(k).value = [k, v];
  } else {
    this._storage[index].addToTail([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  let retrievedNode = this._storage[index].retrieveTuple(k);
  
  if (retrievedNode !== -1) {
    return retrievedNode.value[1];
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  let nodeToRemove = this._storage[index].retrieveTuple(k);

  if (nodeToRemove !== -1) {
    this._storage[index].deleteNode(nodeToRemove);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


