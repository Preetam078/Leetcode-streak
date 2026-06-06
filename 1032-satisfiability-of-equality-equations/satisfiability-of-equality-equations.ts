function equationsPossible(equations: string[]): boolean {
    const parent: number[] = Array.from({length: 26},
    (_, i) => i);
    const size: number[] = Array(26).fill(1);
    
    const getParent = (node: number): number => {
        if(parent[node] === node) return node;
        return parent[node] = getParent(parent[node]);
    }

    const unite = (i: number, j: number):boolean => {
        const rooti: number = getParent(i);
        const rootj: number = getParent(j);

        if(rooti === rootj) return false;
        if(size[rooti] > size[rootj]) {
            parent[rootj] = rooti;
            size[rooti] += size[rootj]; 
        } else {
            parent[rooti] = rootj;
            size[rootj] += size[rooti]; 
        }
        return true;
    }

    for(const currEquation of equations) {
        if(currEquation[1] === '=') {
            const x: number = currEquation[0].charCodeAt(0) - 97;
            const y: number = currEquation[currEquation.length - 1].charCodeAt(0) - 97;
            unite(x, y);
        }
    }

    for(const currEquation of equations) {
        if(currEquation[1] === '!') {
            const x: number = currEquation[0].charCodeAt(0) - 97;
            const y: number = currEquation[currEquation.length - 1].charCodeAt(0) - 97;;
            if(getParent(x) === getParent(y)) return false;
        }
    }
    return true;
};