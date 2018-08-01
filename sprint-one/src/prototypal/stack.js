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
      let lastItem = this.storage[this.count];
      delete lastItem;
      this.count--;
      return lastItem;
    }
  },
  size: function() {
    return this.count;
  }
};


