function swimInWater(grid: number[][]): number {
    type HeapItem = [number, number, number];
    
    const heap: any[] = [null]; 
    const dir: number[][] = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const vis: number[][] = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0));
    
    const insertItem = (value: HeapItem): void => {
        heap.push(value);
        let idx: number = heap.length - 1;

        while (idx > 1) {
            const parent: number = Math.floor(idx / 2);
            if (heap[parent][2] > heap[idx][2]) {
                [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
                idx = parent;
            } else {
                break;
            }
        }
    };

    const removeItem = (): HeapItem | null => {
        if (heap.length === 1) return null;
        if (heap.length === 2) return heap.pop();
        
        const value: HeapItem = heap[1];
        heap[1] = heap.pop();

        let idx: number = 1;
        while (true) {
            let smallest: number = idx;
            const left: number = 2 * idx;
            const right: number = 2 * idx + 1;

            if (left < heap.length && heap[smallest][2] > heap[left][2]) {
                smallest = left;
            }
            if (right < heap.length && heap[smallest][2] > heap[right][2]) {
                smallest = right;
            }
            if (smallest !== idx) {
                [heap[smallest], heap[idx]] = [heap[idx], heap[smallest]];
                idx = smallest;
            } else {
                break;
            }
        }
        return value;
    };

    insertItem([0, 0, grid[0][0]]);
    let maxValue: number = grid[0][0];
    vis[0][0] = 1;

    while (heap.length > 1) {
        const item = removeItem();
        if (!item) break;
        
        const [i, j, value] = item;
        maxValue = Math.max(maxValue, value);
        
        if (i === grid.length - 1 && j === grid[0].length - 1) {
            return maxValue;
        }
        
        for (let k: number = 0; k < dir.length; k++) {
            const nRow: number = i + dir[k][0];
            const nCol: number = j + dir[k][1];

            if (nRow >= 0 && nRow < grid.length &&
                nCol >= 0 && nCol < grid[0].length &&
                vis[nRow][nCol] === 0) {
                insertItem([nRow, nCol, grid[nRow][nCol]]);
                vis[nRow][nCol] = 1;
            }
        }
    }
    return maxValue;
}