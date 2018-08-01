let Queue = function() {
  let queue = {};
  queue.storage = {};
  queue.firstIndex = 0;
  queue.lastIndex = 0;
  queue.count = 0;

  queue.enqueue = function(value) {
    if (queue.firstIndex === 0) {
      queue.firstIndex++;
    }
    queue.lastIndex++;
    queue.storage[queue.lastIndex] = value;
    queue.count = queue.lastIndex - queue.firstIndex + 1;
  };

  queue.dequeue = function() {
    if (queue.count > 0) {
      let firstItem = queue.storage[queue.firstIndex];
      delete firstItem;
      queue.firstIndex++;
      queue.count = queue.lastIndex - queue.firstIndex + 1;
      return firstItem;
    }
  };

  queue.size = function() {
    return queue.count;
  };

  return queue;
};