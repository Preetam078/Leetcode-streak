function totalWaviness(num1: number, num2: number): number {
    let count: number = 0;
    
    let countPeek = (num: number): number => {
        const currArr: string[] = String(num).split("");
        let currCount: number = 0;
        
        for (let i: number = 1; i < currArr.length - 1; i++) {
            const prev = Number(currArr[i - 1]);
            const curr = Number(currArr[i]);
            const next = Number(currArr[i + 1]);

            if ((prev < curr && curr > next) || (prev > curr && curr < next)) {
                currCount++;
            }
        } 
        return currCount;
    }
    for (let i: number = num1; i <= num2; i++) {
        count += countPeek(i);
    }
    return count;
}