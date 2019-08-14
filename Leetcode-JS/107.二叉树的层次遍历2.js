/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var res;

var levelOrderBottom = function(root) {
    res = new Array()
    helper(0, root)
    return res.reverse()
};

var helper = function(level, node) {
    if(res.length == level) {
        res[level] = new Array()
    }

    res[level].push(node.val)

    if(node.left) node.left = helper(level+1, node.left)
    if(node.right) node.right = helper(level+1, node.right)
}