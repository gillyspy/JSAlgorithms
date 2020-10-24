// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

let levelWidth = {
    withStoppers: function (root) {
        let queue = [null] //null is our stopper ( assuming: data !== null )
        let widths = []
        queue.push(root)

        while (queue.length > 1) {
            let node = queue.shift()
            if (node === null) {
                queue.push(node)
                widths.push(0)
            } else {
                queue.push(...node.children)
                widths[widths.length - 1]++
            }

        }
        return widths
    },//
    withArrays  : function (root) {//alternate solution without a stopper
        let widths = [0]
        let queue = []
        queue.push([root])
        while (queue.length) {
            let level = queue[0]
            if (queue.length === 1) {
                if (level.length) {
                    queue.push([])
                } else {
                    widths.pop()
                    break
                }
            }
            let node = level.shift()
            widths[widths.length - 1]++
            queue[1].push(...node.children)
            if (!level.length) {
                queue.shift()
                widths.push([0])
            }
        }
        return widths
    }
}

module.exports = levelWidth.withArrays;
