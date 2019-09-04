# -*- coding: utf-8 -*
class Solution:
    def canPartition(self, nums):
        target, remain = divmod(sum(nums), 2)
        if remain:  # 如果不能整除直接返回
            return False
        print(target)
        ans = {0}
        for i in nums:
            
            for j in list(ans): # 循环中会改变ans
                j += i
                if j == target:  # 提前结束
                    return True
                ans.add(j)  # 之前的结果加当前数能得到的结果
                
        return False
        

        

print(Solution().canPartition([1,5,11,5]))