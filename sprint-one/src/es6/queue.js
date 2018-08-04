class Queue {
  constructor() {
    this.storage = {};
    this.firstIndex = 0;
    this.lastIndex = 0;
    this.count = 0;
  }

  enqueue(value) {
    if (this.firstIndex === 0) {
      this.firstIndex++;
    }
    this.lastIndex++;
    this.storage[this.lastIndex] = value;
    this.count = this.lastIndex - this.firstIndex + 1;
  }

  dequeue() {
    if (this.count > 0) {
      let firstItem = this.storage[this.firstIndex];
      delete this.storage[this.firstIndex];
      this.firstIndex++;
      this.count = this.lastIndex - this.firstIndex + 1;
      return firstItem;
    }
  }

  size() {
    return this.count;
  }
}
