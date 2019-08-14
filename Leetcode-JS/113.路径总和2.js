/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

var pathSum = function(root, sum) {
    var res = new Array()
    helper(root, sum, res, new Array())
    return res
};

var helper = function(root, sum, res, tmp) {
    if(root == null) return 
    tmp.push(root.val)
    if(root.left == null && root.right == null) {
        var j = 0
        for(var i = 0; i < tmp.length; ++i) {
            j += tmp[i]
        }
        if(j == sum) res.push(tmp)
        return
    }
    if(root.left) {
        helper(root.left, sum-root.val, res, tmp)
        return
    }
    if(root.right) {
        helper(root.right, sum-root.val, res, tmp)
    }
}