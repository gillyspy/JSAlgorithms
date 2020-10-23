// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let circular = false
    let [tortoise, hare] = [ list.getFirst(), list.getFirst() ]
    //case 1-node lists
    circular = (tortoise && tortoise === tortoise.next) || circular

    //all other cases
    while( hare && hare.next && hare.next.next && !circular){
        tortoise = tortoise.next //
        hare = hare.next.next
        circular = (tortoise === hare ) ||( tortoise === hare.next )
    }
    return circular
}

module.exports = circular;
