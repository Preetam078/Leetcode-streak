/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    const map = new Map();
    let maxLen = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        const val = nums[right];
        map.set(val, (map.get(val) ?? 0) + 1);

        while ((map.get(0) ?? 0) > k) {
            const leftVal = nums[left];
            map.set(leftVal, map.get(leftVal) - 1);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};