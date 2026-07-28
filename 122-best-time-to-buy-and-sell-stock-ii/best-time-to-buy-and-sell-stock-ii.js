function StockTrader(prices) {
    this.prices = prices;
    this.memo = new Map();
}

StockTrader.prototype.findProfit = function(index, isBuy) {
    if (index >= this.prices.length) return 0;

    const key = `${index}-${isBuy}`;
    if (this.memo.has(key)) return this.memo.get(key);

    let profit = 0;
    if (isBuy) {
        const buy = -this.prices[index] + this.findProfit(index + 1, false);
        const skip = this.findProfit(index + 1, true);
        profit = Math.max(buy, skip);
    } else {
        const sell = this.prices[index] + this.findProfit(index + 1, true);
        const skip = this.findProfit(index + 1, false);
        profit = Math.max(sell, skip);
    }

    this.memo.set(key, profit);
    return profit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const trader = new StockTrader(prices);
    return trader.findProfit(0, true);
};