/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    const sortedList = costs.sort((a, b) => a - b);
    let count = 0;
    for(const currCost of sortedList) {
        if(currCost <= coins) {
            count++;
            coins -= currCost;
        } else break;
    }
    return count;
};