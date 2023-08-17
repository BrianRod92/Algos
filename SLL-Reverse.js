// Create a Node class so we can construct a node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create a Singly Linked List class with methods to manipulate the list
class SLL {
  // Constructor for building this list
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Method for checking if the list is empty
  isEmpty() {
    return this.head === null;
  }

  // Method for appending a node into the SLL
  append(value) {
    let newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.size++;
    } else {
      this.addAtBack(value);
    }
    return this;
  }

  // Method for appending a node to the end of a list
  addAtBack(value) {
    let newNode = new Node(value);
    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.tail = curr.next;
    this.size++;
  }

  // Method to reverse a List
  reverse() {
    let prev = null;
    let curr = this.head;

    if (this.isEmpty()) {
      return false;
    }

    if (curr.next === null) {
      return curr;
    }

    let temp = curr;
    while (curr) {
      let nxt = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nxt;
    }

    this.tail = temp;
    this.head = prev;
    return prev;
  }

  // Method for displaying the SLL
  display() {
    let curr = this.head;
    let results = "";

    if (this.isEmpty()) {
      return "Empty List";
    }

    while (curr) {
      if (curr.next === null) {
        results += curr.value + " --> null";
      } else {
        results += curr.value + " --> ";
      }
      curr = curr.next;
    }
    console.log(results);
  }
}

// New instantiation of the SLL object
let list = new SLL();

// Chained methods on the SLL object
list
  .append(["3327 Donwoody St", "Apt.4A", "11320"])
  .append(["swimming", "bowling", "golf"])
  .append(48)
  .append("Johntheman@gmail.com")
  .append("John")
  .display();

list.reverse();

list.display();

console.log(list.tail.value);
