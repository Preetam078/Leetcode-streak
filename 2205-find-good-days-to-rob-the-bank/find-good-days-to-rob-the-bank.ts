function goodDaysToRobBank(security: number[], time: number): number[] {
    const prefixDesc: number[] = Array(security.length).fill(0);
    const postfixAsc: number[] = Array(security.length).fill(0);

    for(let i: number = 1; i < security.length; i++) {
        if(security[i - 1] >= security[i]) {
            prefixDesc[i] = prefixDesc[i - 1] + 1;
        }
    }
    for(let i: number = security.length - 2; i >= 0; i--) {
        if(security[i + 1] >= security[i]) {
            postfixAsc[i] = postfixAsc[i + 1] + 1;
        }
    }

    const days: number[] = [];
    for(let i: number = 0; i < security.length; i++) {
        if(prefixDesc[i] >= time && postfixAsc[i] >= time) {
            days.push(i);
        }
    }
    return days;
};