/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var in_order = null
var post_order = null

var buildTree = function(inorder, postorder) {
    in_order = inorder
    post_order = postorder
    var len = inorder.length
    return dfs(0, len-1, 0, len-1)
};

var dfs = function(in_l, in_r, post_l, post_r) {
    if(in_l>in_r || post_l>post_r) return null
    var val = post_order[post_r]
    var k = 0
    for(var i = in_l; i < in_r+1; i++) {
        if(in_order[i] == val) {
            k = i;
            break;
        }
    }
    var root = new TreeNode(val)
    root.left = dfs(in_l, k-1, post_l, k-1-in_l+post_l)
    root.right = dfs(k+1, in_r, post_r+k-in_r, post_r-1)
    return root
}