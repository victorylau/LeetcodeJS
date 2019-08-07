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
// var isValidBST = function(root) {
//     if(root == null) return true
//     if(root.left) {
//         if(root.val < root.left.val) {
//             return false
//         }
//         isValidBST(root.left)
//     }
//     if(root.right) {
//         if(root.val > root.right.val) {
//             return false
//         }
//         isValidBST(root.right)
//     }
//     return true
// };

var isValidBST = function(root) {
    return helper(root, null, null)
}

var helper = function(root, left, right) {
    if(root == null) return true
    var val = root.val
    if(left!=null && val <= left) return false
    if(right!=null && val >= right) return false
    if(!helper(root.right,val,right)) return false
    if(!helper(root.left,left,val)) return false
    return true
}

