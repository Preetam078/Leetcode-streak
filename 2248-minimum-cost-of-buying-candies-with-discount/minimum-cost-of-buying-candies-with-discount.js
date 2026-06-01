/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    const sortedCost = cost.sort((a, b) => a - b);
    if(sortedCost.length === 1) {
        return sortedCost[0];
    }
    let totalCost = 0;
    let index = sortedCost.length - 1;

    while(index >= 0) {
        totalCost += sortedCost[index];
        if(index - 1 >= 0) {
            totalCost += sortedCost[index - 1];
        }
        index -= 3;
    }
    return totalCost;
};