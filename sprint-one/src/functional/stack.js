var Stack = function() {
  var stack = {};

  // Use an object with numeric keys to store values
  stack.storage = {};
  stack.count = 0;

  // Implement the methods below
  stack.push = function(value) {
    stack.count++;
    stack.storage[stack.count] = value;
  };

  stack.pop = function() {
    if (stack.count > 0) {
      let topItem = stack.storage[stack.count];
      delete topItem;
      stack.count--;
      return topItem;
    }
  };

  stack.size = function() {
    return stack.count;
  };

  return stack;
};