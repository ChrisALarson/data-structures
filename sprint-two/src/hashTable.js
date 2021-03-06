let HashTable = function() {
  this._limit = 8;
  this._initialized = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.getBucket = function(index) {
  let store = this._storage;
  let bucket = store.get(index);
  if (!bucket) {
    store.set(index, DoublyLinkedList());
    bucket = store.get(index);
    this._initialized++;
  }
  return bucket;
};

HashTable.prototype.insert = function(k, v) {
  this.upsize();
  let index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this.getBucket(index);
  let node = bucket.retrieveTuple(k);
  (node !== -1) ? node.value = [k, v] : bucket.addToTail([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this.getBucket(index);
  let node = bucket.retrieveTuple(k);
  return (node !== -1) ? node.value[1] : undefined;
};

HashTable.prototype.remove = function(k) {
  this.downsize();
  let index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this.getBucket(index);
  let node = bucket.retrieveTuple(k);
  if (node !== -1) {
    bucket.deleteNode(node);
  }
  if (bucket.head === null && bucket.tail === null) {
    this._storage.set(index, undefined);
    this._initialized--;
  }
};

HashTable.prototype.upsize = function(){
  let that = this;
  let ratio = (that._initialized / that._limit);
  if (ratio >= 0.6) {
    that.resizer(that._limit * 2);
  }
};

HashTable.prototype.downsize = function(){
  let that = this;
  let ratio = (that._initialized / that._limit);
  if (ratio <= 0.25 && that._limit > 8) {
    that.resizer(that._limit / 2);
  }
};

HashTable.prototype.resizer = function(newSize) {
  let that = this;
  that._limit = newSize;
  let copyStorage = that._storage;
  that._storage = LimitedArray(that._limit);
  that._initialized = 0;
  copyStorage.each(function(list) {
    if (list) {
      let node = list.head;
      while (node) {
        that.insert(node.value[0], node.value[1]);
        node = node.next;
      }
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
