/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a, b) => a - b);
    const last = nums[nums.length - 3] * nums[nums.length - 2] * nums[nums.length - 1];

    const first = nums[0] * nums[1] * nums[nums.length - 1];

    return Math.max(last, first);
};