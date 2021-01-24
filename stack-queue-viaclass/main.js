class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head == null;
    }
    
    peek() {
        return this.head?.data;
    }
    
    add(data) {
        const node = new Node(data);
    
        if (this.tail !== null) {
            this.tail.next = node;
        }
    
        this.tail = node;
    
        if (this.head === null) {
            this.head = node;
        }
    }
    
    remove() {
        const data = this.head.data;
        this.head = this.head.next;
    
        if (this.head === null) {
            this.tail = null;
        }
    
        return data;
    }

}

let gaf = new Queue ("fut")
gaf.peek()
// my ver.............................

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        return this.top == null;
    } 

    peek() {
        return this.top?.data;
    }

    push(data) {
        const node = new Node(data);
        node.next = this.top;
        this.top = node;
    }

    pop() {
        const data = this.top.data;
        this.top = this.top.next;
        return data;
    }
}
