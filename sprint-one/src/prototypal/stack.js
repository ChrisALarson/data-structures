var Stack = function() {
  let stack = Object.create(stackMethods);
  stack.storage = {};
  stack.count = 0;
  return stack;
};

var stackMethods = {
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  pop: function() {
    if (this.count > 0) {
      let topItem = this.storage[this.count];
      delete this.storage[this.count];
      this.count--;
      return topItem;
    }
  },
  size: function() {
    return this.count;
  }
};
