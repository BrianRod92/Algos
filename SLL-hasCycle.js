// Algorithm Problem: Detecting a Cycle in a Singly Linked List

// Problem Description:
// Given a singly linked list, determine if the list contains a cycle. A cycle in a linked list occurs when a node in the list points to a previously visited node, creating a loop.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Checks if the list is empty; returns True or False.
  isEmpty() {
    return this.head === null;
  }

  hasCycle(list) {
    let curr = list;
    let runner = list;

    while (curr && runner && runner.next) {
      curr = curr.next;
      runner = runner.next.next;
      if (curr === runner) {
        return true; // If curr and runner meet, there's a cycle
      }
    }

    return false; // If runner reaches the end, there's no cycle
  }

  append(value) {
    let newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.size++;
    } else {
      // Helper method to add new Node to the end of a list.
      this.addAtBack(value);
    }
    return this;
  }

  // Method for adding a new Node to the end of a Singly Linked List
  addAtBack(value) {
    let curr = this.head;
    let newNode = new Node(value);

    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.size++;
  }

  display() {
    let results = "";
    let curr = this.head;

    if (this.isEmpty()) {
      return "The List your are requesting is Empty.";
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

const list = new SLL();
const list2 = new SLL();
const list3 = new SLL();
const list4 = new SLL();

list.append(1);
list2.append(2);
list3.append(3);
list4.append(4);

list.head.next = list2.head;
list2.head.next = list3.head;
list3.head.next = list4.head;
list4.head.next = list2.head; // Creating a cycle

const result = list.hasCycle(list.head);

console.log(result);
