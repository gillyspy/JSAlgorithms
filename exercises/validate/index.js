// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    let isValid
    //move left, then right
    /*
    traversing down:
    -if there is a left in question go left.
    -if there is not a left in question then go right
    -if there is anot a right then we're good
     */
    min = node.left ? node.left.data : min
    max = node.right ? node.right.data : max

    if (//
        (
            node.left &&
            node.data < node.left.data &&
            node.left.data >= min
        ) ||
        (
            node.right &&
            node.data > node.right.data &&
            node.right.data <= max
        )
    ) {
        return false
    }

    isValid = true
    /*if (!node.left && !node.right) {
        return isValid
    }*/

    if (node.left && isValid) {
        isValid = validate(node.left, node.left.data, max)
    }

    if (node.right && isValid) {
        isValid = validate(node.right, min, node.right.data)
    }
    return isValid
}

module.exports = validate;
