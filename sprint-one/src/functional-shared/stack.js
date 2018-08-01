let Stack = function() {
  let stack = {};
  stack.storage = {};
  stack.count = 0;

  let extend = function(target, source) {
    for (let key in source) {
      target[key] = source[key];
    }
  };

  extend(stack, stackMethods);

  return stack;
};

let stackMethods = {
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


