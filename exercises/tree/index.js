// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor( data ){
        this.children = []
        this.data = data
    }

    add( data ){
        this.children.push( new Node( data ) )
    }

    remove( data ){
        this.children.forEach( (child, i, nodes )=>{
            if( child.data === data ){
                //slice out the node
                nodes.splice(i,i+1)
            }
        })
    }
}

class Tree {
    constructor(){
        this.root = null
    }
    //breadth first traversal
    traverseBF( callback ){
        if( !this.root ){
            return
        }

        const queue = []
        queue.push( this.root )
        while( queue.length ){
            let node = queue.shift()
            queue.push(...node.children)
            callback(node)
        }
    }
    //depth first traversal
    traverseDF( callback ){
        if( !this.root  ){
            return
        }
        const queue = []
        queue.push( this.root )
        while( queue.length ){
            let node = queue.shift()
            queue.unshift( ...node.children )
            callback(node)
        }
    }
}

module.exports = { Tree, Node };