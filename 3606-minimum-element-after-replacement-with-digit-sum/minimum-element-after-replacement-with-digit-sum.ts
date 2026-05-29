function minElement(nums: number[]): number {
    let minSum: number = Infinity;
    for(let currEle of nums) {
        let currSum:number = 0;
        while(currEle > 0) {
            currSum += currEle % 10;
            currEle = Math.floor(currEle / 10);
        }
        minSum = Math.min(minSum, currSum);
    }
    return minSum;
};