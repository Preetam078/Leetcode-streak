/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    const len = s.length;
    const halfLen = Math.floor(len / 2);

    const mid = len % 2 !== 0 ? s.charAt(halfLen) : "";

    let firstHalfArr = s.slice(0, halfLen).split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

    const firstHalf = firstHalfArr.join("");
    const secondHalf = firstHalfArr.reverse().join("");

    return `${firstHalf}${mid}${secondHalf}`;
};