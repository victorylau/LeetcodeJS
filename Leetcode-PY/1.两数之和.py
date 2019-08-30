class Hash:
    def __init__(self):
        self.hash_table=[[None,None]for i in range(1000)]
    def hash(self,k,i):
        h_value=(k+i)%1000
        if self.hash_table[h_value][0]==k:
            return h_value
        if self.hash_table[h_value][0]!=None:
            i+=1
            h_value=self.hash(k,i)
        return h_value
    
    def put(self,k,v):
        hash_v=self.hash(k,0)
        self.hash_table[hash_v][0]=k
        self.hash_table[hash_v][1]=v

    def get(self,k):
        hash_v=self.hash(k,0)
        return self.hash_table[hash_v][1]
class Solution:
    # def twoSum(self, nums, target):
    #     if not nums: return[]
    #     for i, x in enumerate(nums):
    #         last = target - x
    #         for j in range(i+1, len(nums)):
    #             if last == nums[j]: return [i, j]
    #     return []

    def twoSum(self, nums, target):
        hashmap={}
        for i,num in enumerate(nums):
            if hashmap.get(target - num) is not None:
                return [i,hashmap.get(target - num)]
            hashmap[num] = i 


params = [230,863,916,585,981,404,316,785,88,12,70,435,384,778,887,755,740,337,86,92,325,422,815,650,920,125,277,336,221,847,168,23,677,61,400,136,874,363,394,199,863,997,794,587,124,321,212,957,764,173,314,422,927,783,930,282,306,506,44,926,691,568,68,730,933,737,531,180,414,751,28,546,60,371,493,370,527,387,43,541,13,457,328,227,652,365,430,803,59,858,538,427,583,368,375,173,809,896,370,789]
print(Solution().twoSum(params ,542))