/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let left = 0;
    const set = new Set();

    for (let right = 0; right < s.length; right++) {
        while (set.has(s.charAt(right))) {
            set.delete(s.charAt(left));
            left++;
        }
        
        set.add(s.charAt(right));
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};