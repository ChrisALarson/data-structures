let LinkedList = function() {
  let list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = Node(value);

    if (list.head === null) {
      list.head = node;
    }
    
    if (list.tail !== null) {
      list.tail.next = node;
    }    

    list.tail = node;
  };

  list.removeHead = function() {
    let currentHeadValue = list.head.value;
    list.head = list.head.next;
    return currentHeadValue;
  };

  list.contains = function(target) {
    let checkNodeForTarget = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return checkNodeForTarget(node.next);
      }
    }

    return checkNodeForTarget(list.head);
  };

  return list;
};

let Node = function(value) {
  let node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
