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

var levelOrder = function(root) {
    var levels = new Array()
    if(root == null) return levels
    helper(root, 0, levels);
    return levels
};

var helper = function(node, level, levels) {
    if(levels.length == level) levels.push(new Array())
    levels[level].push(node.val)
    if(node.left) helper(node.left, level+1, levels)
    if(node.right) helper(node.right, level+1, levels)
};