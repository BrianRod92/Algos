// Create a Node Class to allow the ability to create a new Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create a Singly Linked List Class with methods that manipulate the linked list
class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Checks if the list is empty
  isEmpty() {
    return this.head === null;
  }

  // Adds a new Node to the SLL
  append(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.size++;
      this.tail = this.head;
    } else {
      // Helper method to add a new Node to the end of a list
      this.addAtBack(value);
    }
    return this;
  }
  // Adds new Node to the end of the list
  addAtBack(value) {
    let curr = this.head;
    let newNode = new Node(value);

    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.size++;
  }

  // Reverses a SLL
  reverse() {
    let prev = null;
    let curr = this.head;

    if (this.isEmpty()) {
      return "Empty List";
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
    this.head = prev;
    this.tail = temp;
    return prev;
  }

  // Removes a node based on the param from the SLL
  remove(data) {
    let curr = this.head;
    let nxt = this.head.next;

    if (this.isEmpty()) {
      return "Empty List";
    }

    if (curr.next === null) {
      this.head = null;
    }

    if (curr.value === data) {
      this.head = curr.next;
      return true;
    }

    while (nxt) {
      if (nxt.value === data) {
        curr.next = nxt.next;
      }
      curr = nxt;
      nxt = nxt.next;
    }

    return false;
  }

  // Finds the middle of a SLL
  findMiddle() {
    let curr = this.head;
    let runner = this.head.next.next;
    if (this.isEmpty()) {
      return "Empty List";
    }

    if (curr.next === null) {
      return curr;
    }

    while (runner.next) {
      curr = curr.next;
      runner = runner.next;
    }
    console.log("The middle Node is:", curr.value);
    return curr;
  }

  // Displays a SLL
  display() {
    let curr = this.head;
    let list = "";

    if (this.isEmpty()) {
      return "Empty list";
    }
    while (curr) {
      if (curr.next === null) {
        list += curr.value + " --> null ";
      } else {
        list += curr.value + " --> ";
      }
      curr = curr.next;
    }
    this.tail = curr;
    console.log(list);
  }
}
// Creates a new instance of the SLL class
let list = new SLL();

list
  .append(21)
  .append("Bill")
  .append(["Sept", 10, 1990])
  .append("123 Easy St")
  .append("150 pounds")
  .display();

list.remove("Bill");
list.reverse();
list.display();

list.findMiddle();
