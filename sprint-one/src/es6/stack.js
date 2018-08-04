class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.count++;
    this.storage[this.count] = value;
  }

  pop() {
    if (this.count > 0) {
      let topItem = this.storage[this.count]; 
      delete this.storage[this.count];
      this.count--;
      return topItem;
    }
  }

  size() {
    return this.count;
  }
}
