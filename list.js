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
    if (this.head === null) {
      this.head = this.tail = new Node(value);
    } else {
      const nodeToAdd = new Node(value);
      nodeToAdd.nextNode = this.head;
      this.head = nodeToAdd;
    }
    this.size++;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    if (this.head === null) {
      console.log("This list is empty");
    }
    if (index >= this.size) {
      console.log("The index is too large");
      return;
    }

    let current = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      current = current.nextNode;
      currentIndex++;
    }

    return current;
  }

  pop() {
    if (this.head === null) {
      return;
    }

    let current = this.head;

    while (current.nextNode != this.tail) {
      current = current.nextNode;
    }

    this.tail = current;
    this.tail.nextNode = null;
    this.size--;
  }

  contains(value) {
    let current = this.head;

    while (current != null) {}
  }

  find(value) {
    //TODO
  }

  toString() {
    let current = this.head;
    let string = "";
    while (current != null) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    string += "null";
    console.log(string);
  }

  insertAt(value, index) {
    //TODO
  }

  removeAt(index) {
    //TODO
  }
}
