import Node from "./node.js";

export default class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    if (this.tail === null) {
      this.head = this.tail = new Node(value);
    } else {
      this.tail.nextNode = new Node(value);
      this.tail = this.tail.nextNode;
    }
    this.size++;
  }

  prepend(value) {
    //TODO
  }

  at(index) {
    //TODO
  }

  pop() {
    //TODO
  }

  contains(value) {
    //TODO
  }

  find(value) {
    //TODO
  }

  toString() {
    //TODO
  }

  insertAt(value, index) {
    //TODO
  }

  removeAt(index) {
    //TODO
  }
}
