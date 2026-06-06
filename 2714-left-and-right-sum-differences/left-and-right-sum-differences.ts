function leftRightDifference(nums: number[]): number[] {
    const n = nums.length;
    const prefix: number[] = Array(n).fill(0);
    const postfix: number[] = Array(n).fill(0);
    let leftSum = 0;
    for (let i = 0; i < n; i++) {
        prefix[i] = leftSum;
        leftSum += nums[i];
    }

    let rightSum = 0;
    for (let i = n - 1; i >= 0; i--) {
        postfix[i] = rightSum;
        rightSum += nums[i];
    }

    const ans: number[] = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        ans[i] = Math.abs(prefix[i] - postfix[i]);
    }

    return ans;
}