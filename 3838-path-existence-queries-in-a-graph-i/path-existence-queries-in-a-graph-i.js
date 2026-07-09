/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    const groupId = Array(n).fill(0);
    let currentGroup = 0;
    
    for (let i = 1; i < n; i++) {
        if (Math.abs(nums[i] - nums[i - 1]) > maxDiff) {
            currentGroup++;
        }
        groupId[i] = currentGroup;
    }
    
    const ans = Array(queries.length).fill(false);
    

    for (let i = 0; i < queries.length; i++) {
        const [u, v] = queries[i];
        if (groupId[u] === groupId[v]) {
            ans[i] = true;
        }
    }
    
    return ans;
};