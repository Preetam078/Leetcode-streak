/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const queue = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                if (grid[i][j] === 1) {
                    grid[i][j] = -1;
                    queue.push([i, j]);
                }
            }
        }
    }

    let head = 0;
    while (head < queue.length) {
        const [row, col] = queue[head++];
        for (let k = 0; k < dir.length; k++) {
            const newRow = row + dir[k][0];
            const newCol = col + dir[k][1];

            if (
                newRow >= 0 && 
                newRow < m &&
                newCol >= 0 && 
                newCol < n &&
                grid[newRow][newCol] === 1
            ) {
                grid[newRow][newCol] = -1;
                queue.push([newRow, newCol]);
            }
        }
    }

    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                count++;
            }
        }
    }

    return count;
};