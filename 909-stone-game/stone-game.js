/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    const n = piles.length;
    const memo = new Map();

    const totalStone = (i, j) => {
        if (i > j) return 0;
        if (i === j) return piles[i];
        
        const key = `${i},${j}`;
        if (memo.has(key)) return memo.get(key);

        const pickLeft = piles[i] - totalStone(i + 1, j);
        const pickRight = piles[j] - totalStone(i, j - 1);
        
        const res = Math.max(pickLeft, pickRight);
        memo.set(key, res);
        return res;
    };

    return totalStone(0, n - 1) > 0;
};