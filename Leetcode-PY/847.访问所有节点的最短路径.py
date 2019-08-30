import collections

class Solution:
    def shortestPathLength(self, graph):
        if not graph: return 0
        
        deque = collections.deque()
        N = len(graph)
        for n in range(N):
            deque.append([n, 1<<n])
        all_nodes= (1<<(N))-1
        states_seen = [[0 for j in range(pow(2, N))] for i in range(N)]
        path_length = 0

        while deque:
            nq = len(deque)
            while nq:
                nq = nq - 1
                cur_node = deque.popleft()
                if cur_node[1] == all_nodes:
                    return path_length
                neighbours = graph[cur_node[0]]
                for id in neighbours:
                    nodes_visited = cur_node[1]
                    nodes_visited = nodes_visited | (1<<id)
                    if states_seen[id][nodes_visited]:
                        continue
                    states_seen[id][nodes_visited] = 1
                    deque.append([id, nodes_visited])
            path_length = path_length + 1
        return -1


print(Solution().shortestPathLength([[1,2,3],[0],[0],[0]]))