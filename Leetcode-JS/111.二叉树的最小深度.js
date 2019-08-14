/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root == null) return 0
    var m1 = minDepth(root.left)
    var m2 = minDepth(root.right)
    return root.left == null || root.right == null ? m1+m2+1: Math.min(m1,m2) + 1
};