class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyList {
  constructor() {
    this.nodeLenght = 0;
    this.head = null;
    this.tail = null;
  }

  addElement(value){
    let node = new Node(value);
    let currentNode = this.head;

    if (!currentNode) {
      this.head = node;
      this.tail = node;
      this.nodeLenght++;

      return node;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.tail = node;
    this.nodeLenght++;

    return node;
  }
}

class Operations {
  constructor(array) {
    this.list = new SinglyList();
    this.array = array;
  }

  searchNodeAt(position) {
    let currentNode = this.list.head;
    let length = this.list.nodeLenght;
    let count = 1;

    if (length === 0 || position < 1 || position > length) {
      console.log('Error');
      return 0;
    }

    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode.data;
  }

  createList(){
    for (let key in this.array) {
      this.list.addElement(this.array[key]);
    }
  }

  writeList() {
    let aux = this.list.head;
    while (aux) {
      console.log(aux.data);
      aux = aux.next;
    }
  }

  lab7() {
    let gap;
    let maxGap = -9999;
    let count = 0;
    let position1;
    let position2;
    let currentNode = this.list.head;

    while (currentNode.next) {
      gap = Math.abs(currentNode.data.x - currentNode.next.data.x) + Math.abs(currentNode.data.y - currentNode.next.data.y);

      if(gap > maxGap){
        position1 = count;
        position2 = count + 1;
        maxGap = gap;
      }

      count++;
      currentNode = currentNode.next;
    }
    console.log( this.searchNodeAt(position1 + 1) +  this.searchNodeAt(position2 + 1) + maxGap);
  }

  lab8() {
    let newList = new SinglyList();
    let currentNode = this.list.head;
    let newNode = newList.head;
    let aria = [];

    while (currentNode) {
      newList.addElement(currentNode.data.width * currentNode.data.height);
      currentNode = currentNode.next;
    }

    while (newNode) {
      console.log(newNode.data);
      newNode = newNode.next;
    }

  }

  lab9(name) {
    let currentNode = this.list.head;

    while (currentNode) {
      if (currentNode.data.name === name) {
        console.log(currentNode.data);
      }
      currentNode = currentNode.next;
    }
  }

}
let test = [{x: 10, y: 20}, {x: 14, y: 25}, {x: 5, y: 40}, {x: 36, y: 24}];
let test2 = [{width: 10, height: 20}, {width: 14, height: 25}, {width: 5, height: 40}, {width: 36, height: 24}];
let test3 = [{id: 0, name: 'AHA'}, {id: 1, name: 'OHO'}, {id: 2, name: "IHI"}, {id: 3, name: 'UHU'}];

// let operation = new Operations(test);
// operation.createList();
// operation.lab7();

// let operation2 = new Operations(test2);
// operation2.createList(test2);
// operation2.lab8();

// let operation3 = new Operations(test3);
// operation3.createList();
// operation3.lab9('UHU');
