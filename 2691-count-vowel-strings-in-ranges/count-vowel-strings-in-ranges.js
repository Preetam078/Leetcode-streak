/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
    const checkVowel = (word) => {
        return vowelSet.has(word[0]) && vowelSet.has(word[word.length - 1]);
    };

    const prefixArray = new Int32Array(words.length);
    prefixArray[0] = checkVowel(words[0]) ? 1 : 0;

    for (let i = 1; i < words.length; i++) {
        prefixArray[i] = prefixArray[i - 1] + (checkVowel(words[i]) ? 1 : 0);
    }

    const ans = new Array(queries.length);
    let index = 0;
    
    for (const [left, right] of queries) {
        if (left === 0) {
            ans[index++] = prefixArray[right];
        } else {
            ans[index++] = prefixArray[right] - prefixArray[left - 1];
        }
    }
    return ans;
};