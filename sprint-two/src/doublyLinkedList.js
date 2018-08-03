let DoublyLinkedList = function() {
  let list = {};
  list.head = null;
  list.tail = null;
  
  list.addToHead = function(value) {
    //set node.next to current head
    //reassign head to node
    let node = DoubleNode(value);

    if (list.tail === null) {
      list.tail = node;
    }

    if (list.head !== null) {
      list.head.previous = node;
      node.next = list.head;
    }

    list.head = node;
  };

  list.addToTail = function(value) {
    let node = DoubleNode(value);

    if (list.head === null) {
      list.head = node;
    }
    
    if (list.tail !== null) {
      list.tail.next = node;
      node.previous = list.tail;
    }    

    list.tail = node;
  };

  list.removeHead = function() {
    let currentHeadValue = list.head.value;
    if (list.head.next === null) { 
      list.tail = null;
    }
    if (list.head.next !== null) {
      list.head.next.previous = null;
    }

    list.head = list.head.next;
    return currentHeadValue;
  };

  list.removeTail = function() {
    let currentTailValue = list.tail.value;
    if (list.tail.previous === null) { 
      list.head = null;
    }
    
    if (list.tail.previous !== null) {
      list.tail.previous.next = null;
    }

    list.tail = list.tail.previous;
    return currentTailValue;
  };

  //Removes first node to match target (in the event of duplicate values)
  list.removeNode = function(target) {
    let deleteNode = function(node) {
      if (node.previous === null && node.next === null) {
        list.head = null;
        list.tail = null;
      } else if (node === list.tail) {
        list.tail = node.previous;
        node.previous.next = node.next;
      } else if (node === list.head) {
        list.head = node.next;
        node.next.previous = node.previous;
      } else {
        node.next.previous = node.previous;
        node.previous.next = node.next;
      }
      return node.value;
    };
    let checkNodeForTarget = function(node) {
      if (node === null) {
        return false;
      }
      if (node.value === target) {
        return deleteNode(node);
      } else if (node.next === null) {
        return false;
      } else {
        return checkNodeForTarget(node.next);
      }
    };

    // if, once node is found, node.prev === null and node.next === null
      // set list.head and list.tail to null
    
    // if, once node is found, node === the tail ..
      // set tail to node.prev
      // set node.prev.next = node.next
      // do NOT set node.next.prev = node.prev

    // if, once node is found, node === the head ..
      // set head to node.next
      // set node.next.prev = node.prev
      // do NOT set node.prev.next = node.next

    // else, once node is found ...
      // set node.next.prev = node.prev
      // set node.prev.next = node.next

    return checkNodeForTarget(list.head);
  };

  list.contains = function(target) {
    let checkNodeForTarget = function(node) {
      if (node === null) {
        return false;
      }
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return checkNodeForTarget(node.next);
      }
    };

    return checkNodeForTarget(list.head);
  };

  return list;
};

let DoubleNode = function(value) {
  let node = {};
  
  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
