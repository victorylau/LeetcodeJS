/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var res = new Array()
    nums.sort((a,b)=>a-b)
    var n = nums.length
    for(var i = 0; i < n-3; i++) {
        if(i>0 && nums[i]==nums[i-1]) continue;
        if(nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target) break;
        if(nums[i] + nums[n-1] + nums[n-2] + nums[n-3] < target) continue;
        for(var j = i+1; j < n-2; j++) {
            if((j-i)>1 && nums[j] == nums[j-1]) continue
            if(nums[i] + nums[j] + nums[j+1] + nums[j+2] > target) break
            if(nums[i] + nums[j] + nums[n-1] + nums[n-2] < target) continue
            var left = j + 1
            var right = n - 1
            while(left < right) {
                var tmp = nums[i] + nums[j] + nums[left] + nums[right]
                if (tmp == target) {
                    var arrs = [nums[i], nums[j], nums[left], nums[right]]
                    res.push(arrs)
                    while(left < right && nums[left] == nums[left+1]) left+=1
                    while(left < right && nums[right] == nums[right-1]) right-=1
                    left+=1
                    right-=1
                } 
                else if (tmp > target) right-=1
                else left+=1
            }
        }
    }
    return res
};

var example = [1,2,3,4,-1,-2]
console.log(fourSum(example,0))