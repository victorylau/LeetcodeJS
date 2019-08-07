/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(inorder.length == 0) return null
    // var root = new TreeNode(preorder[0])
    
    // root.left = buildTree(preorder.slice(1, mid+1), inorder.slice(0, mid))
    // root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1))

    console.log(preorder)
    console.log(inorder)
    console.log('------')
    var mid = inorder.indexOf(preorder[0])
    buildTree(preorder.slice(1, mid+1), inorder.slice(0, mid))
    buildTree(preorder.slice(mid+1), inorder.slice(mid+1))

    // return root
};

buildTree([3,9,20,15,7], [9,3,15,20,7])