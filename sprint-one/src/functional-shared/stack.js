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
