class Solution:
    def calculateMinimumHP(self, dungeon):
        if len(dungeon) is 0 or len(dungeon[0]) is 0: return 0
        # if len(dungeon) is 1 :
        #     hp = 0
        #     for i in range(len(dungeon[0])-1, -1, -1):
        #         hp = max(0, -dungeon[0][i]) + hp
        #     return hp
        # if len(dungeon[0]) is 1:
        #     hp = 0
        #     for i in range(len(dungeon)-1, -1, -1):
        #         hp = max(0, -dungeon[i][0]) + hp
        #     return hp

        m = len(dungeon)
        n = len(dungeon[0])
        result = [[0 for _ in range(n)] for _ in range(m)]

        print(result)
        print(m-1)
        print(n-1)

        result[m-1][n-1] = max(0,-dungeon[m-1][n-1])

        for i in range(m-2, -1, -1):
            result[i][n-1] = max(0, result[i+1][n-1] - dungeon[i][n-1])
        
        for j in range(n-2, -1, -1):
            result[m-1][j] = max(0, result[m-1][j+1] - dungeon[m-1][j])
        
        for i in range(m-2, -1, -1):
            for j in range (n-2, -1, -1):
                result[i][j] = max(0, min(result[i+1][j],result[i][j+1]) - dungeon[i][j])
                
        return result[0][0] + 1

par = [[1,-4,5,-99],[2,-2,-2,-1]]
print(Solution().calculateMinimumHP(par))