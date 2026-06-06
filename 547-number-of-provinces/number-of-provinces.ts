function findCircleNum(isConnected: number[][]): number {
    const parent: number[] = Array.from({length: isConnected.length},
    (_, i) => i);
    const size: number[] = Array.from({length: isConnected.length},
    () => 1);

    const getParent = (node: number): number => {
        if(parent[node] === node) {
            return node;
        }
        return parent[node] = getParent(parent[node]);
    }

    const unite = (i: number, j: number): boolean => {
        const rooti: number = getParent(i);
        const rootj: number = getParent(j);

        if(rooti === rootj) return false;
        if(size[rooti] > size[rootj]) {
            parent[rootj] = rooti;
            size[rooti] += size[rootj];
        } else {
            parent[rooti] = rootj;
            size[rootj] += size[rooti];
        }
        return true;
    }

    const n = isConnected.length;
    const adj = Array.from({length: n}, () => []);
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(i === j) continue;
            if(isConnected[i][j] === 1) {
                adj[i].push(j);
            }
        }
    }

    for(let i: number = 0; i < adj.length; i++) {
        const currEle: number[] = adj[i];
        for(const num of currEle) {
            unite(num, i);
        }
    }

    let count = 0;
    for(let i: number = 0; i < adj.length; i++) {
        if(parent[i] === i) count++;
    }
    return count;
};