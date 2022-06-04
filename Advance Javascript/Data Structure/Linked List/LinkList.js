class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // functions to be implemented
  // add new element
  add(element) {
    let node = new Node(element);
    // let curr = this.head;
    if (this.head == null) this.head = node;
    else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next
      }
      curr.next = node;
    }
    this.size++;
  }
  // insert At certain position
  insertAt(element, index) {
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index")
    else {
      let node = new Node(element)
      let curr, prev;
      curr = this.head;

      if (index == 0)
        node.next = this.head;
      else {
        let i = 0
        while (i < index) {
          i++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = node;
        node.next = curr;
      }
    }
    this.size++;
  }

  // remove a specific element
  removeElement(element) {
    let current = this.head;
    let prev = null;
    while (current != null) {
      if (current.element === element) {
        if (prev == null)
          this.head = current.next;
        else {
          prev.next = current.next;
        }
        this.size--;
      }
      prev = current;
      current = current.next;
    }
  }

  // Remove from a specific position/location
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Please Enter a valid index")
    }

    let current = this.head;
    let prev = current;
    let iteration = 0;
    if (index === 0) {
      this.head = current.next;
    }
    else {
      while (iteration < index) {
        iteration++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    size--;
  }

  // Check the linklist is empty or not
  isEmpty() {
    return this.head ? false : true;
  }

  // Check the size of the linklist
  size_Of_List() {
    return this.size;
  }

  // Print LinkList
  printList() {
    let curr = this.head;
    while (curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }

  // finding index of element
  indexOf(element) {
    if (this.head == null)
      return -1;
    let current = this.head;

    let index = 0;
    while (current.element != element) {
      current = current.next;
      index++;
    }
    return index;

  }
}

// creating an object for the Linkedlist class
let linklist = new LinkedList();

console.log(linklist.isEmpty()); // true


// adding first element to the list
linklist.add(100);

console.log(linklist.size_Of_List()); // return 1

// adding more elements to the list
linklist.add(10);
linklist.add(20);
linklist.add(30);
linklist.add(40);
linklist.add(50);

// returns 100 10 20 30 40 50
linklist.printList();

// removing 50 from linklist
linklist.removeElement(50)

// prints 100 10 20 30 40
linklist.printList();

// Return the index of provided node
console.log("Index of 40 " + linklist.indexOf(40));

// insert 60 at second position
// linklist contains 100 10 20 60 30 40
linklist.insertAt(60, 2);

// linklist.printList();

// returns false
console.log("is List Empty ? " + linklist.isEmpty());


// prints 100 10 20 60 30 40
linklist.printList();