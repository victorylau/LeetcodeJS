/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
    return helper(0, nums.length, nums)
};

var helper = function(start, end ,nums) {
    if(start==end) return null
    var mid = parseInt((start+end)/2)
    var node = new TreeNode(nums[mid])
    node.left = helper(start, mid, nums)
    node.right = helper(mid+1, end, nums)
    return node
}


console.log(sortedArrayToBST([-10,-3,0,5,9]))