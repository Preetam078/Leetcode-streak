class SegmentTree {
    constructor(size) {
        this.n = size;
        this.tree = new Int32Array(4 * size);
    }

    update(node, start, end, idx, val) {
        if (start === end) {
            this.tree[node] = val;
            return;
        }
        const mid = Math.floor((start + end) / 2);
        if (idx <= mid) {
            this.update(2 * node, start, mid, idx, val);
        } else {
            this.update(2 * node + 1, mid + 1, end, idx, val);
        }
        this.tree[node] = Math.max(this.tree[2 * node], this.tree[2 * node + 1]);
    }

    query(node, start, end, l, r) {
        if (r < start || end < l) {
            return 0;
        }
        if (l <= start && end <= r) {
            return this.tree[node];
        }
        const mid = Math.floor((start + end) / 2);
        const p1 = this.query(2 * node, start, mid, l, r);
        const p2 = this.query(2 * node + 1, mid + 1, end, l, r);
        return Math.max(p1, p2);
    }
}

// Helper functions for maintaining a sorted array
function bisectRight(arr, target) {
    let l = 0, r = arr.length;
    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        if (arr[mid] <= target) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return l;
}

function insertSorted(arr, val) {
    const idx = bisectRight(arr, val);
    arr.splice(idx, 0, val);
}

function removeSorted(arr, val) {
    const idx = bisectRight(arr, val) - 1;
    if (idx >= 0 && arr[idx] === val) {
        arr.splice(idx, 1);
    }
}

/**
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var getResults = function(queries) {
    const max_x = Math.min(50000, queries.length * 3);
    
    // Track unique obstacles we'll eventually encounter
    const obstaclesSet = new Set([0, max_x]);
    for (const q of queries) {
        if (q[0] === 1) {
            obstaclesSet.add(q[1]);
        }
    }
    
    // Sort all unique obstacles initially
    const obstacles = Array.from(obstaclesSet).sort((a, b) => a - b);
    
    // Initialize Segment Tree with all initial gaps active
    const segTree = new SegmentTree(max_x + 1);
    for (let i = 1; i < obstacles.length; i++) {
        const prevObs = obstacles[i - 1];
        const currObs = obstacles[i];
        segTree.update(1, 0, max_x, currObs, currObs - prevObs);
    }
    
    const ans = [];

    for (let i = queries.length - 1; i >= 0; i--) {
        const q = queries[i];
        
        if (q[0] === 1) {
            const x = q[1];
            const idx = bisectRight(obstacles, x) - 1;
            const prevObs = obstacles[idx - 1];
            const nextObs = obstacles[idx + 1];
            removeSorted(obstacles, x);
        
            segTree.update(1, 0, max_x, nextObs, nextObs - prevObs);

            segTree.update(1, 0, max_x, x, 0);
            
        } else {
            const x = q[1];
            const sz = q[2];
            
            const idx = bisectRight(obstacles, x) - 1;
            const prevObs = obstacles[idx];
            
            const maxGapBefore = segTree.query(1, 0, max_x, 0, prevObs);
            
            const trailingGap = x - prevObs;
            
            if (maxGapBefore >= sz || trailingGap >= sz) {
                ans.push(true);
            } else {
                ans.push(false);
            }
        }
    }
    
    return ans.reverse();
};