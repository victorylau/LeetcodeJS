class Solution:
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        if len(matrix) is 0 or len(matrix[0]) is 0:
            print('here')
            return False
        
        for m in matrix:
            if m[0] is target or m[-1] is target:
                return True
            if m[0] < target and m[-1] > target:
                l = 0 
                r = len(m) - 1
                while l <= r:
                    mid  = (l + r) // 2

                    if m[mid] is target:
                        return True
                    elif m[mid] < target:
                        l = mid + 1
                    elif m[mid] > target:
                        r = mid - 1
        
        return False
                    

print(Solution().searchMatrix([[]],5))