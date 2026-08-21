/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    const queue = [];
    let freshCount = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                freshCount++;
            }
        }
    }

    if (freshCount === 0) return 0;

    let time = 0;
    let head = 0; // Using pointer instead of shift() for O(1) dequeue performance

    while (head < queue.length && freshCount > 0) {
        const size = queue.length - head;

        for (let i = 0; i < size; i++) {
            const [row, col] = queue[head++];

            for (const [dr, dc] of dir) {
                const currRow = row + dr;
                const currCol = col + dc;

                if (
                    currRow >= 0 &&
                    currRow < rows &&
                    currCol >= 0 &&
                    currCol < cols &&
                    grid[currRow][currCol] === 1
                ) {
                    grid[currRow][currCol] = 2;
                    freshCount--;
                    queue.push([currRow, currCol]);
                }
            }
        }
        time++;
    }

    return freshCount === 0 ? time : -1;
};