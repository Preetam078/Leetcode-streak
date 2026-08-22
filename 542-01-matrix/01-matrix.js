/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const queue = [];
    const dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
            } else {
                mat[i][j] = -1;
            }
        }
    }

    let head = 0;
    while (head < queue.length) {
        const [row, col] = queue[head++];

        for (let [dr, dc] of dir) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (
                newRow >= 0 &&
                newRow < m &&
                newCol >= 0 &&
                newCol < n &&
                mat[newRow][newCol] === -1
            ) {
                mat[newRow][newCol] = mat[row][col] + 1;
                queue.push([newRow, newCol]);
            }
        }
    }

    return mat;
};