// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }


/* find midpoint without using size and without using a counter
when amibuous (even number of entries) the midpoint is end of first half
*/
function midpoint( list ){
	let [tortoise, hare ] = [ list.getFirst(), list.getFirst()]
	while( hare.next && hare.next.next){
		tortoise = tortoise.next
		hare = hare.next.next
	}
	return tortoise
}

module.exports = midpoint;
