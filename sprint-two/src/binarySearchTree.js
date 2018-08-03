var BinarySearchTree = function(value) {
  let bst = Object.create(BinarySearchTree.methods);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

BinarySearchTree.methods = {
  insert: function(value) {
    let childBst = BinarySearchTree(value);
    if (this.value === value) {
      return 'Duplicate value: cannot insert';
    } else if (this.value > value) {
      if (this.left === null) {
        this.left = childBst;
      } else {
        this.left.insert(value);
      }
    } else if (this.value < value) {
      if (this.right === null) {
        this.right = childBst;
      } else {
        this.right.insert(value);
      }
    }
  },

  contains: function(value) {
    if (this.value === value) {
      return true;
    } else if (this.value > value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (this.value < value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
    return false;
  },

  depthFirstLog: function(callback) {
    callback(this.value);
    if (this.left) {
      this.left.depthFirstLog(callback);
    }
    if (this.right) {
      this.right.depthFirstLog(callback);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
