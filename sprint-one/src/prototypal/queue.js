var Queue = function() {
  let queue = Object.create(queueMethods);
  queue.storage = {};
  queue.firstIndex = 0;
  queue.lastIndex = 0;
  queue.count = 0;
  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    if (this.firstIndex === 0) {
      this.firstIndex++;
    }
    this.lastIndex++;
    this.storage[this.lastIndex] = value;
    this.count = this.lastIndex - this.firstIndex + 1;
  },
  dequeue: function() {
    if (this.count > 0) {
      let firstItem = this.storage[this.firstIndex];
      delete this.storage[this.firstIndex];
      this.firstIndex++;
      this.count = this.lastIndex - this.firstIndex + 1;
      return firstItem;
    }
  },
  size: function() {
    return this.count;
  }
};
