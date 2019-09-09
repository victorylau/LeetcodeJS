m,n = 8,8
matrics = [['x' for _ in range(m)] for _ in range(n)]
matrics[2][1], matrics[6][1], matrics[4][2], matrics[0][3] = 0, 0, 0, 0
matrics[2][3], matrics[5][3], matrics[2][4], matrics[3][5] = 0, 0, 0, 0
matrics[4][5], matrics[6][5], matrics[1][6], matrics[5][6] = 0, 0, 0, 0
class Solution:
    
    def count_path(self, sx, sy):
        dp = [[0 for _ in range(m)] for _ in range(n)]

        for i in range(m-1,sx-1,-1):
            for j in range(n-1,sy-1,-1):
                if i == m-1 or j == n-1:
                    dp[i][j] = 1
                else:
                    if matrics[i][j] == 'x':
                        dp[i][j] = dp[i+1][j]+dp[i][j+1]
                    else:
                        dp[i][j] = 0

        return dp[sx][sy]

print(Solution().count_path(0, 0))