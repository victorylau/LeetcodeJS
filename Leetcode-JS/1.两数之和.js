/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var numsLength = nums.length;
    for (var i = 0; i < numsLength; i++) {
        for (let j = i + 1; j < numsLength; j++) {
            const element = nums[i];
            const elementNext = nums[j];
            if (element + elementNext == target) {
                return [i, j];
            }
        }
    }
    return [];
};

console.log((twoSum([1,2,3,4,5],8)));