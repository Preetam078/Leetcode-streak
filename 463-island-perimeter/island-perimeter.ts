function islandPerimeter(grid: number[][]): number {
    let perimeter: number = 0;
    const dir: number[][] = [[1, 0],[0, 1],[-1, 0],[0, -1]];
    
    const vis: boolean[][] = Array.from({length: grid.length}, 
    () => Array(grid[0].length).fill(false));

    function dfs (i: number, j: number): void {
        if(i < 0 || i >= grid.length 
           || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
            perimeter++;
            return;
           }
        if(vis[i][j] === true) return;
        vis[i][j] = true;

        for(let k: number = 0; k < 4; k++) {
            const nRow: number = i + dir[k][0];
            const nCol: number = j + dir[k][1];

            dfs(nRow, nCol);
        }
    }

    for(let i: number = 0; i < grid.length; i++) {
        for(let j: number = 0; j < grid[0].length; j++) {
            // Fix 2: Start DFS on land (1) instead of water (0)
            if(grid[i][j] === 1 && !vis[i][j]) {
                dfs(i, j);
                return perimeter; 
            }
        }
    }
    return perimeter;
};