class Solution(object):
    def maxSlidingWindow(self, nums, k):
        if not nums: return []
        window, result = [], []
        for i, x in enumerate(nums):
            if i >= k and window[0] <= i - k: 
                window.pop(0)
            while window and nums[window[-1]] <= x:
                window.pop()
            window.append(i)
            if i >= k - 1:
                result.append(nums[window[0]])
        return result
            

print(Solution().maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))