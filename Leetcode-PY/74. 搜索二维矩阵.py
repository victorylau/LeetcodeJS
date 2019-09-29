import math
class Solution:
    def searchMatrix(self, matrix, target):
        if len(matrix) == 0: return False
        for arr in matrix:
            if arr[0] == target or arr[-1] == target:
                return True
            if arr[0] < target and arr[-1] > target:
                low = 0
                high = len(arr)-1
                while low <= high:
                    mid = int(math.floor((low+high)/2))
                    if target == arr[mid]:
                        return True
                    elif target > arr[mid]:
                        low = mid + 1
                    else:
                        high = mid - 1
                break
        return False


print(Solution().searchMatrix([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
],13))