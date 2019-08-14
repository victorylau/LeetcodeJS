/**
 * @param {number} k
 * @param {number[]} nums
 */

var q = new Array();
var kValue = 0;

var KthLargest = function(k, nums) {
    kValue = k
    for(var i = 0; i < nums.length; i++) {
        KthLargest.prototype.add(nums[i])
    }

};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(q.length < kValue) {
        q.push(val)
    }
    else if(q[0] < val) {
        q.shift()
        q.push(val)
    }
    return q[0]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */