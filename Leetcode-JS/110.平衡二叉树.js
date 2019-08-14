/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return depth(root) != -1
};

var depth = function(root) {
    if(root == null) return 0
    var left = depth(root.left)
    if(left == -1) return -1
    var right = depth(root.right)
    if(right == -1) return -1
    return Math.abs(left-right) < 2 ? Math.max(left, right) + 1 : -1
}