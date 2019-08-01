/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var generateTrees = function(n) {
    if(n==0) return new Array()
    return g_trees(1,n);
};

var g_trees = function(start, end) {
    var res = new Array()
    if(start > end) {
        res.push(null)
        return res
    }
    for(var i = start; i <= end; i++) {
        var leftTrees = g_trees(start, i-1)
        var rightTrees = g_trees(i+1, end)
        for(var j = 0; j < leftTrees.length; j++){
            for(var k = 0; k < rightTrees.length; k++) {
                var curTree = new TreeNode(i)
                curTree.left = leftTrees[j]
                curTree.right = rightTrees[k]
                res.push(curTree)
              }
        }  
    }
    return res
}

console.log(generateTrees(1))