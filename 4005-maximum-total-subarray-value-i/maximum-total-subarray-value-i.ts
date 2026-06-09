function maxTotalValue(nums: number[], k: number): number {
    const minValue: number = Math.min(...nums);
    const maxValue: number = Math.max(...nums);

    return (maxValue - minValue) * k;
};