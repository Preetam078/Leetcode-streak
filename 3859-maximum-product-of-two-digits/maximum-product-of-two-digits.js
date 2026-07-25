/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    const arr = []
    
    while (n > 0) {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    }
    
    arr.sort((a, b) => a - b);

    if (arr.length < 2) return 0;
    
    return arr[arr.length - 2] * arr[arr.length - 1];
};