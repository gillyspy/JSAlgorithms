// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document



class Node {
	constructor(data, next =  null){
		[this.data, this.next] = [data, next]
	}
}

class LinkedList{
	constructor(){
		this.head = null
	}

	insertFirst( data ){
		return this.insertAt( data, 0 )
	}

	size(){
		let n = 0
		let curNode = this.head
		while(curNode){
			curNode = curNode.next
			n++
		}
		return n
	}

	getFirst(){
		return this.getAt(0)
//		return this.head
	}

	getLast(){
		return this.getAt( this.size() -1 )
/*
		let curNode = this.head
		let last
		while(curNode ){
			last = curNode
			curNode = curNode.next
		}
		return last || this.head
*/
	}

	clear(){
		let prev
		let next = this.getFirst()
		while(next){
			prev = next
			next = next.next
			if(prev.next)
				prev.next= null
		}
		this.head = null
	}

	removeFirst(){
		/* remove only the first and relink the chain */
/*		var f = this.getFirst()
		if( f !== null ){
			this.head = f.next
			f.next = null
		}
		return ll*/
		return this.removeAt( 0 )
	}

/**/
	removeLast(){
		return this.removeAt(  this.size() - 1 )
		/*
console.log('removing')
		let curNode = this.head
		let [prev, ct] = [curNode, 0]
		if( curNode !== null){ //if not head
			while(curNode.next ){
				[prev, ct ] = [curNode, ++ct]
				curNode = curNode.next
			}
			console.log(ct,  prev)
			if( ct <=1) {
				this.clear()
			} else {
				prev.next = null
			}
		}
		return ll*/

	} /**/

	insertLast( data ){
		return this.insertAt( data, this.size()-1 )
/*
		const last = this.getLast()
	 if(!last ) {
		 //empty is equivalent to inserting first
		 this.insertFirst( data )
	 } else {
		 last.next = new Node( data )
	 }
		return ll
*/
	}

	getAt( idx ){
		let [node, ct] = [ this.head, 0]
		if( idx === 0){
			node= this.head

		}
		ct = 0;
		while( ++ct < idx && node.next   ){
			callCt++
			node = node.next
		}
		if( ct >= idx && node ){
			return node
		}
		return null
	}

	removeAt( idx ){
		if( !this.head ){
			return
		}
		let at = this.head.next
		//removing a node at the beginning
		if( idx === 0){
			this.head = this.head.next
			at = null
			return
		}

		const before = this.getAt(idx - 1)
		if( !before || !before.next){ //out of bounds OR last node
			return
		}
		at = before.next
		before.next = before.next.next
		at = null

	}

	insertAt( data, idx){
		//case :totally empty
		if( !this.head ){
			this.head = new Node( data )
			return
		}

		//entering at 0 (but perhaps non-empty)
		if(idx === 0){
			this.head = new Node( data, this.head)
			return
		}

		//case: anywhere in the list  (incl. out of bounds fallback to end)

		let before = this.getAt(idx-1)	|| this.getLast() // for outof bounds
		before.next = new Node( data, before.next )
	}//insertAt

	toArray(){
		let curNode = this.head
		let output = []
			while(curNode ){
				output.push(curNode.data)
				curNode = curNode.next
			}
			return output
	}

	forEach( fn ){
		let curNode = this.head
			while(curNode ){
				fn( curNode )
				curNode = curNode.next
			}
			return

	}

	*[Symbol.iterator](){
		let node = this.head
		while(node){
			yield node
			node = node.next
		}
	}
}



module.exports = { Node, LinkedList };