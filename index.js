import List from "./list.js";

const LinkedList = new List();

for (let i = 1; i < 9; i++) {
  LinkedList.append(i);
}

LinkedList.toString();

LinkedList.prepend("I am prepended");

LinkedList.toString();

console.log("The head node is:");
console.log(LinkedList.getHead());

console.log("The tail node is:");
console.log(LinkedList.getTail());

console.log("The size is:");
console.log(LinkedList.getSize());

console.log("The node at index 5 is:");
console.log(LinkedList.at(5));

console.log("Popping the last element...");
LinkedList.pop();
LinkedList.toString();

console.log("Does the list contain 9?");
console.log(LinkedList.contains(9));
console.log("Does the list contain 3?");
console.log(LinkedList.contains(3));

LinkedList.prepend("New value prepended!");
LinkedList.toString();
console.log("The index of the value 6 is:");
console.log(LinkedList.find(6));

console.log("Inserting at index 6");
LinkedList.insertAt("I am at index 5!", 5);
LinkedList.toString();
console.log("Inserting at index 2");
LinkedList.insertAt("I am at index 2!", 2);
LinkedList.toString();
