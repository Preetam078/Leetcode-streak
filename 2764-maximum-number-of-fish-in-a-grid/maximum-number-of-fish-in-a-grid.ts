function findMaxFish(grid: number[][]): number {
    let n: number = grid.length;
    let m: number = grid[0].length;
    let maxAns: number = 0;
    const dir: number[][] = [[1, 0],[0, 1],[-1, 0],[0, -1]];

    const vis: boolean[][] = Array.from({length: n},
    () => Array(m).fill(false));

    function dfs (i: number, j: number): number {
        if(i < 0 || i >= n || j < 0 || j >= m 
        || vis[i][j] || grid[i][j] === 0) {
            return 0;
        }
        vis[i][j] = true;
        let currAns: number = 0;
        for(let k: number = 0; k < 4; k++) {
            const nRow: number = i + dir[k][0];
            const nCol: number = j + dir[k][1];

            currAns += dfs(nRow, nCol);
        }
        return grid[i][j] + currAns;
    }

    for(let i:number = 0; i < n; i++) {
        for(let j:number = 0; j < m; j++) {
            if(grid[i][j] !== 0 && !vis[i][j]) {
                maxAns = Math.max(maxAns, dfs(i, j));
            }
        }
    }
    return maxAns;
};