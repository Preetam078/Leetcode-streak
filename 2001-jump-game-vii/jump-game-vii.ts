function canReach(s: string, minJump: number, maxJump: number): boolean {
    if(s[s.length - 1] === '1') return false;
    const n: number = s.length;

    const queue: number[] = [0];
    let farthest: number = 0;

    while(queue.length > 0) {
        const currIdx: number = queue.shift();
        for (let i: number = Math.max(currIdx + minJump, farthest + 1); 
        i <= Math.min(currIdx + maxJump, n - 1); i++) { 
            if(s[i] === '0') {
                if(i === n - 1) return true;
                queue.push(i);
            }
        }
        farthest = Math.min(currIdx + maxJump, n - 1);
    }
    return false;
};