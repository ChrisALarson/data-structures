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
      let lastItem = this.storage[this.count]; 
      delete this.storage[this.count];
      this.count--;
      return lastItem;
    }
    console.log('in pop method');
  }

  size() {
    return this.count;
  }
}

/*
  pop() {
    if (this.count > 0) {
      let lastItem = this.storage[this.count]; // why doesn't this work in the class?
      delete lastItem;
      this.count--;
      return lastItem;
    }
  }
  */