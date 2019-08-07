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
var isSymmetric = function(root) {
    return isMirror(root, root)
};

var isMirror = function(p, q) {
    if(p == null && q == null) return true
    if(p == null || q == null) return false
    return (p.val == q.val) && isMirror(p.left, q.right) && isMirror(p.right, q.left)
}