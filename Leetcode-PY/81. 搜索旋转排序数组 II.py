class Solution:
    def search(self, nums, target):
        if len(nums) is 0:
            return False
        if nums[0] is target:
            return True
        
        left = 0
        right = len(nums)-1

        while left <= right:
            mid = left + (right-left)//2
            if target == nums[mid]:
                return True
            if nums[left] == nums[mid]:
                left = left + 1
                continue
            if nums[left] > nums[mid]:
                if nums[mid] < target and nums[right] >= target:
                    left = mid + 1
                else:
                    right = mid - 1
            else:
                if nums[mid] > target and nums[right] <= target:
                    right = mid - 1
                else:
                    left = mid + 1
        return False

print(Solution().search([3,4,5,1,2,3],2))
            