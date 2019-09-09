class Solution:
    def findRedundantConnection(self, edges):
        
        p = {i: {i} for i in range(1,len(edges) + 1)}
        
        for x, y in edges:
            if p[x] is not p[y]:
               print(p)
               p[x] |= p[y]
               print(p)
               for z in p[y]:
                   p[z] = p[x]
            else:
                print(p)
                return [x, y]
            

print(Solution().findRedundantConnection([[1,2], [2,3], [3,4], [1,4], [1,5]]))
            