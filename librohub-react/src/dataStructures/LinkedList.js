// src/dataStructures/LinkedList.js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    delete(id) {
        if (!this.head) {
            console.warn("La lista está vacía.");
            return;
        }
        if (this.head.data.id === id) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let previous = null;

        while (current) {
            if (current.data.id === id) {
                if (previous) {
                    previous.next = current.next;
                }
                return;
            }
            previous = current;
            current = current.next;
        }
        console.warn(`No se encontró un libro con el id: ${id}`);
    }

    update(updatedBook) {
        let current = this.head;
        while (current) {
            if (current.data.id === updatedBook.id) {
                current.data = updatedBook;
                return;
            }
            current = current.next;
        }
    }

    getAll() {
        const books = [];
        let current = this.head;
        while (current) {
            books.push(current.data);
            current = current.next;
        }
        return books;
    }

    searchByTitle(title) {
        let current = this.head;
        while (current) {
            if (current.data.title.toLowerCase() === title.toLowerCase()) {
                return current.data;  
            }
            current = current.next;
        }
        return null;  
    }
}

export default LinkedList;
