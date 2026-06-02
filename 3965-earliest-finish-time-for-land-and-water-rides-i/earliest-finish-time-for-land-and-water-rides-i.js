/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    
    const calculateOrder = (startA, durationA, startB, durationB) => {
        let minEndA = Infinity;
        for (let i = 0; i < startA.length; i++) {
            minEndA = Math.min(minEndA, startA[i] + durationA[i]);
        }
        
        let minTotalFinish = Infinity;
        for (let j = 0; j < startB.length; j++) {
            const actualStartB = Math.max(startB[j], minEndA);
            const totalFinishTime = actualStartB + durationB[j];
            
            minTotalFinish = Math.min(minTotalFinish, totalFinishTime);
        }
        
        return minTotalFinish;
    };

    const landFirst = calculateOrder(landStartTime, landDuration, waterStartTime, waterDuration);
    
    const waterFirst = calculateOrder(waterStartTime, waterDuration, landStartTime, landDuration);

    return Math.min(landFirst, waterFirst);
};