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
