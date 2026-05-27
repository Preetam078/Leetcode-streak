function numberOfSpecialChars(word: string): number {
    let count: number = 0;
    
    const lowerMap = new Map<string, number>();
    const upperMap = new Map<string, number>();

    for (let i = 0; i < word.length; i++) {
        const currEle = word[i];
        
        if (currEle >= "a" && currEle <= "z") {
            lowerMap.set(currEle, i);
        } else if (currEle >= "A" && currEle <= "Z") {
            if (!upperMap.has(currEle)) {
                upperMap.set(currEle, i);
            }
        }
    }

    for (const [ch, lowerIndex] of lowerMap.entries()) {
        const correspondingUpper = ch.toUpperCase();
        
        if (upperMap.has(correspondingUpper)) {
            const upperIndex = upperMap.get(correspondingUpper)!;
            if (lowerIndex < upperIndex) {
                count++;
            }
        }
    }
    
    return count;
}