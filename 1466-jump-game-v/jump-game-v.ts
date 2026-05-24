function maxJumps(arr: number[], d: number): number {
    let ans: number = 1;
    const dp: number[] = Array.from({length: arr.length + 1}, () => -1); 

    function dfs (index: number): number {
        if(dp[index] !== -1) return dp[index];
        let ans: number = 1;
        for(let j: number = index + 1; j <= Math.min(arr.length - 1, index + d); j++) {
            if(arr[j] >= arr[index]) break;
            ans = Math.max(ans, 1 + dfs(j));
        }
        for(let j: number = index - 1; j >= Math.max(0, index - d); j--) {
            if(arr[j] >= arr[index]) break;
            ans = Math.max(ans, 1 + dfs(j));
        }
        return dp[index] = ans;
    }

    for(let i: number = 0; i < arr.length; i++) {
        ans = Math.max(ans, dfs(i));
    }
    return ans;
};