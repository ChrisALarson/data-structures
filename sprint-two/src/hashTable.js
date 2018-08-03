

var HashTable = function() {
  this._limit = 8;
  // this._storage = LimitedArray(this._limit);
  this._storage = [];
};


HashTable.prototype.insert = function(k, v) {


  var index = getIndexBelowMaxForKey(k, this._limit);
// storage = array
// bucket = doublyLinkedList
// associations = tuple

// let newNode = Node([k, v]);
    // { val: [k, v] }
  let newEntry = {
    //key: k,
    val: [k, v],
    next: null
  };
  let handleInsertCollisions = function(node) {
    if (node.key === k) {
      node.val = v;
    } else {
      if (node.next === null) {
        node.next = newEntry;
      } else {
        handleInsertCollisions(node.next);
      }
    }
  };
  
  //Added test to check if multiple collisions can be handled
  if (this._storage[index] === undefined) {
    this._storage[index] = newEntry;
  } else {
    handleInsertCollisions(this._storage[index]);
  }
 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let lookForKeyInEntry = function(entry) {
    if (entry.key === k) {
      return entry.val;
    } else if (entry.next !== null) {
      return lookForKeyInEntry(entry.next);
    }
    return false;
  };

  if (this._storage[index] !== undefined) {
    return lookForKeyInEntry(this._storage[index]);
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index] = undefined;
};



let ourList = LinkedList();
let newEntry = Node('first node!');
//newEntry.key = 'first key here';
ourList.addToTail('first node no key');
console.log(ourList);



// var getIndexBelowMaxForKey = function(str, max) {
//   var hash = 0;
//   for (var i = 0; i < str.length; i++) {
//     hash = (hash << 5) + hash + str.charCodeAt(i);
//     hash = hash & hash; // Convert to 32bit integer
//     hash = Math.abs(hash);
//   }
//   return hash % max;
// };

// let ourTable = new HashTable();
// console.log(ourTable);
// ourTable.insert('hello', 'hello');
// console.log(ourTable);


/*
 * Complexity: What is the time complexity of the above functions?
 */


