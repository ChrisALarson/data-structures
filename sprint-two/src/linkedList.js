let LinkedList = function() {
  let list = {};
  list.head = null;
  list.tail = null;
  list.nodes = {};
  list.lastKeyAdded = 0;
  list.headKey = null;

  list.addToTail = function(value) {
    let node = Node(value);
    list.lastKeyAdded++;
    list.nodes[list.lastKeyAdded] = node;
    if (list.head === null) {
      list.head = node;
      list.headKey = list.lastKeyAdded;
    }
    if (list.tail !== null) {
      list.tail.next = list.lastKeyAdded;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    let currentHead = list.head;
    delete list.nodes[list.headKey];
    let nextHead = list.nodes[currentHead.next];
    list.head = nextHead;
    list.headKey = currentHead.next;
    return currentHead.value;
  };

  list.contains = function(target) {
    for (let key in list.nodes) {
      if (list.nodes[key].value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

let Node = function(value) {
  let node = {};

  node.value = value;
  node.next = null;

  return node;
};

let myLinkedList = LinkedList();

/*
 * Complexity: What is the time complexity of the above functions?
 */
