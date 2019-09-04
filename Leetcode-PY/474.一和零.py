class Solution:
    def findMaxForm(self, strs, m, n) :
        if len(strs) == 0: return 0
            
        dp = [[0 for _ in range(n+1)] for _ in range(m+1)]

        for str in strs:
            item0 = str.count('0')
            item1 = str.count('1')

            for i in range(m, item0 - 1, -1):
                for j in range(n, item1 - 1, -1):
                    dp[i][j] = max(dp[i][j], 1 + dp[i-item0][j-item1])
        
        print(dp)
        return dp[m][n]

Solution().findMaxForm(["10","0001","111001","1","0"],5,3)