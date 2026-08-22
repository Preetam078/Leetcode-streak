function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const adj: number[][] = Array.from({length: numCourses}, () => []);
    const indegree: number[] = Array.from({length: numCourses}, () => 0);

    for(const [u, v] of prerequisites) {
        adj[v].push(u);
        indegree[u]++;
    }

    const topo: number[] = [];
    const queue: number[] = [];
    indegree.forEach((curr, index) => {
        if(curr === 0) {
            queue.push(index);
        }
    })

    let head: number = 0;
    while(head < queue.length) {
        const currEle = queue[head++];
        topo.push(currEle);
        for(const nextEle of adj[currEle]) {
            indegree[nextEle]--;
            if(indegree[nextEle] === 0) {
                queue.push(nextEle);
            }
        }
    }

    return topo.length === numCourses ? topo : [];
};