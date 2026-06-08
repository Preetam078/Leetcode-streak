function pivotArray(nums: number[], pivot: number): number[] {
    const lessEle: number[] = [];
    const greatEle: number[] = [];
    const pivotEle: number[] = [];

    for(const currEle of nums) {
        if(currEle < pivot) {
            lessEle.push(currEle);
        } else if(currEle > pivot) {
            greatEle.push(currEle);
        } else {
            pivotEle.push(currEle);
        }
    }

    return [...lessEle, ...pivotEle, ...greatEle];
};