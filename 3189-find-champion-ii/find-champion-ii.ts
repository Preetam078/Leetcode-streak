type AdjacentEdge = [number, number];

function findChampion(n: number, edges: number[][]): number {
    const indegree: number[] = Array(n).fill(0);
    
    for (const [from, to] of edges as AdjacentEdge[]) {
        indegree[to] += 1;
    }

    let count: number = 0;
    let ans: number = -1;
    
    for (let i: number = 0; i < n; i++) {
        if (indegree[i] === 0) {
            count++;
            ans = i;
        }
    }
    return count > 1 ? -1 : ans;
}