/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a, b) => a - b);
    const first = (nums[nums.length - 2] - 1) * (nums[nums.length - 1] - 1);
    const second = (nums[0] - 1) * (nums[nums.length - 1] - 1);
    return Math.max(first, second);
};