class NumArray:
    def __init__(self, nums):
        self.length = len(nums)
        self.sumSegementTree = [0 for _ in range(self.length)]
        [self.sumSegementTree.append(v) for v in nums]
        for i in range(self.length-1, -1, -1):
            self.sumSegementTree[i] = self.sumSegementTree[2*i]+ self.sumSegementTree[2*i+1]
        


    def update(self, i, val):
        i += self.length
        self.sumSegementTree[i] = val

        while i > 1:
            i //= 2
            self.sumSegementTree[i] = self.sumSegementTree[2*i]+ self.sumSegementTree[2*i+1]

    def sumRange(self, i, j):
        i += self.length
        j += self.length
        j += 1
        s = 0
        while i<j:
            if (i & 1) == 1: 
                s += self.sumSegementTree[i]
                i += 1
            if (j & 1) == 1:
                j -= 1
                s += self.sumSegementTree[j]
            i >>= 1
            j >>= 1
        return s
        
obj = NumArray([1,3,5])
obj.update(1, 2)
print(obj.sumRange(0, 2))


