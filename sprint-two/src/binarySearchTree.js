var BinarySearchTree = function(value) {

  /*
    create bst object that delegates to BST methods
      assign value prop on bst as val
      assign left and right props to bst set to null
    return bst
  */

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
      console.log('You screwed up');
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

/*
  contains(value):
    check if primary node's value === value
      if so, return true
      if not, check if < or > current node value
        if <, check if left prop is not null
          if not null, recurse on left
          if null, return false
        if >, check if right prop is not null
          if not null, recurse on right
          if null, return false
*/

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

  depthFirstLog(callback) {
  }
};

let ourBst = BinarySearchTree(5);
ourBst.insert(2);
console.log(ourBst);
ourBst.insert(3);
console.log(ourBst);




/*
 * Complexity: What is the time complexity of the above functions?
 */
