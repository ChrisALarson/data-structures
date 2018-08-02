var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  let childFound = false;
  this.children.forEach(function(child) {
    if (child.value === target) {
      childFound = true;
    }
    if (child.children.length > 0 && !childFound) {
      childFound = child.contains(target);
    } 
  });
  return childFound;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
