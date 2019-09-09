class Solution:
    def lastStoneWeightII(self, stones):
        s = sum(stones)
        v = s // 2
        dp = [0 for _ in range(v+1)]
        for item in stones:
            for i in range(v, item-1, -1):
                dp[i] = max(dp[i], dp[i-item]+item)
            print(dp)
        return s-2*dp[v]
                
            

print(Solution().lastStoneWeightII([1,10]))