var Queue = function() {
  this.storage = {};
  this.firstIndex = 0;
  this.lastIndex = 0;
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  if (this.firstIndex === 0) {
    this.firstIndex++;
  }
  this.lastIndex++;
  this.storage[this.lastIndex] = value;
  this.count = this.lastIndex - this.firstIndex + 1;
};

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    let firstItem = this.storage[this.firstIndex];
    delete this.storage[this.firstIndex];
    this.firstIndex++;
    this.count = this.lastIndex - this.firstIndex + 1;
    return firstItem;
  }
};

Queue.prototype.size = function() {
  return this.count;
};
