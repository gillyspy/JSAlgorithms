// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        [this.left, this.right] = [null, null]
        this.data = data

    }

    insert(data) {
        let node = this;
        if (data < this.data) {
            if (this.left === null) {
                this.left = new Node(data)

            } else {
                this.left.insert(data)
            }
        } else { // data > this.data
            if (this.right === null) {
                this.right = new Node(data)
            } else {
                this.right.insert(data)
            }
        }
        return
    }

    contains(data) {
        let node = this;
        if (data === this.data) {
            return this
        } else if (data < this.data && this.left) {
            return this.left.contains(data)
        } else if (data > this.data && this.right) {
            return this.right.contains(data)
        }
        return null
    }
}

module.exports = Node;
