class TreeNode:
    def __init__(self, val):
        self.left = None
        self.right = None
        self.val = val
        self.count = 0

class Solution:
    def countSmaller(self, nums):
        length = len(nums)
        root = None
        res = [0 for _ in range(length)]
        for i in reversed(range(length)):
            root = self.insertNode(root, nums[i], res, i)
        return res
        

    def insertNode(self, root, val, res, res_index):
        if root == None:
            root = TreeNode(val)
        elif val <= root.val:
            root.count += 1
            root.left = self.insertNode(root.left, val, res, res_index)
        elif val > root.val:
            res[res_index] += root.count+1
            root.right = self.insertNode(root.right, val, res, res_index)
        return root


print(Solution().countSmaller([5,2,6,1]))