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
}

HashTable.prototype.insert = function(k, v) {
  this.resize();
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
  //check if need to be resized
  
  let index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this.getBucket(index);
  let node = bucket.retrieveTuple(k);
  return (node !== -1) ? bucket.deleteNode(node) : undefined;
};

HashTable.prototype.resize = function(){
  let ratio = (this._initialized / this._limit)

  let reHash = function(node) {
    this.insert(node.value[0], node.value[1]);
  };

  let changeSize = function(newSize) {
    let copyStorage = this._storage.slice()
    this._storage = LimitedArray(newSize)
    copyStorage.each(function(list){
      if (list){
        let node = list.head;
          reHash(node);
        while (node.next) {
          node = node.next;
          reHash(node);
        };
      }
    });
  }; 

  if (ratio >= .75) {
    changeSize(this._limit *= 2);
  } else if (ratio <= .25 && this._limit > 8) {
    changeSize(this._limit /= 2);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


