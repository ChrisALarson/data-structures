describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "addToHead", "removeHead", "removeTail", "removeNode", "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.removeNode).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added with addToTail', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should designate a new head when new nodes are added with addToHead', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should correctly set previous value to prior node', function() {
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(3);
    expect(doublyLinkedList.tail.previous.value).to.equal(5);
    expect(doublyLinkedList.head.previous).to.equal(null);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
    expect(doublyLinkedList.head.previous).to.equal(null);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should return the value of the former tail when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeTail()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  it('should return false when searching an empty list using contain', function() {
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doublyLinkedList
  
  it('should contain a value in a long list', function() {
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(7);
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(9);
    doublyLinkedList.addToTail(11);
    doublyLinkedList.addToTail(8);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.addToTail(1);
    doublyLinkedList.addToTail(17);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(11)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(false);
  });

  it('should reset head and tail to null when all nodes are deleted from list with removeHead', function() {
    doublyLinkedList.addToHead(1);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.addToHead(3);
    doublyLinkedList.removeHead();
    doublyLinkedList.removeHead();
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head).to.equal(null);
    expect(doublyLinkedList.tail).to.equal(null);
    console.log(doublyLinkedList);
  });

  it('should reset head and tail to null when all nodes are deleted from list with removeTail', function() {
    doublyLinkedList.addToTail(1);
    doublyLinkedList.addToHead(2);
    doublyLinkedList.addToTail(3);
    doublyLinkedList.removeTail();
    doublyLinkedList.removeTail();
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.head).to.equal(null);
    expect(doublyLinkedList.tail).to.equal(null);
    console.log(doublyLinkedList);
  });

  it('should return false when removing node from empty list', function() {
    expect(doublyLinkedList.removeNode(10)).to.equal(false);
    expect(doublyLinkedList.contains(10)).to.equal(false);
  });

  it('should return value of deleted node', function() {
    doublyLinkedList.addToHead(10);
    expect(doublyLinkedList.removeNode(10)).to.equal(10);
    expect(doublyLinkedList.contains(10)).to.equal(false);
  });

  it('should correctly delete node when node is head', function() {
    doublyLinkedList.addToHead(10);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.removeNode(10)).to.equal(10);
    expect(doublyLinkedList.head.value).to.equal(5);
    expect(doublyLinkedList.head.previous).to.equal(null);
    expect(doublyLinkedList.contains(10)).to.equal(false);
  });
  
  it('should correctly delete node when node is tail', function() {
    doublyLinkedList.addToHead(10);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.removeNode(5)).to.equal(5);
    expect(doublyLinkedList.tail.value).to.equal(10);
    expect(doublyLinkedList.tail.next).to.equal(null);
    expect(doublyLinkedList.contains(5)).to.equal(false);
  });

  it('should correctly delete node when node is at a position between head and tail', function() {
    doublyLinkedList.addToHead(10);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToHead(12);
    doublyLinkedList.addToTail(31);
    expect(doublyLinkedList.removeNode(12)).to.equal(12);
    expect(doublyLinkedList.head.next.next.value).to.equal(31);
    expect(doublyLinkedList.tail.previous.value).to.equal(5);
    expect(doublyLinkedList.contains(12)).to.equal(false);
  });
});
