/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    const parent = Array.from({length: n}, (_, i) => i);
    const size = Array(n).fill(1); 

    const getParent = (n) => {
        if(parent[n] === n) return n;
        return parent[n] = getParent(parent[n]); // path compression
    }

    const unite = (i, j) => {
        const rooti = getParent(i);
        const rootj = getParent(j);

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

    for(let i = 1; i < n; i++) {
        if(Math.abs(nums[i] - nums[i - 1]) <= maxDiff) {
            unite(i, i - 1);
        }
    }

    const ans = [];
    for(const [src, dest] of queries) {
        if(getParent(src) === getParent(dest)) {
            ans.push(true);
        } else {
            ans.push(false);
        }
    }
    return ans;
};