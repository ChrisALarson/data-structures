

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
  let newEntry = {
      key: k,
      val: v,
      next: null
    };
  if (this._storage[index] === undefined || this._storage[index].key === k) {
    this._storage[index] = newEntry;
  } else if (this._storage[index] !== undefined && this._storage[index].key !== k) {
    this._storage[index].next = newEntry;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // given index, aka bucket:
  // call lookForKeyInEntry on the bucket's value (entry in the bucket)
    // if the key in the entry is ===
      // return the value
    // else if the key is not ===, and there is a next:
      // return the output of calling lookForKeyInEntry on next
    // else if key doesn't match, and there is no next
      // return false

  let lookForKeyInEntry = function(entry) {
    if (entry.key === k){
      return entry.val;
    } else if (entry.next !== null) {
      return lookForKeyInEntry(entry.next);
    }
    return false;
  }

  if (this._storage[index] !== undefined) {
    return lookForKeyInEntry(this._storage[index]);
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index] = undefined;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


