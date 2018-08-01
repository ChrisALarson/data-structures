var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function() {
  if (this.count > 0) {
    let lastItem = this.storage[this.count];
    delete lastItem;
    this.count--;
    return lastItem;
  }
};

Stack.prototype.size = function() {
  return this.count;
};

