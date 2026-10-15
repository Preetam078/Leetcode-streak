class Solution {
    public boolean canJump(int[] nums) {
        Boolean[] memo = new Boolean[nums.length];
        return helper(nums, 0, memo);
    }

    private boolean helper(int[] nums, int i, Boolean[] memo) {
        if (i >= nums.length - 1) return true;
        if (memo[i] != null) return memo[i];

        int maxJump = nums[i];
        for (int j = 1; j <= maxJump; j++) {
            if (helper(nums, i + j, memo)) {
                return memo[i] = true;
            }
        }

        return memo[i] = false;
    }
}