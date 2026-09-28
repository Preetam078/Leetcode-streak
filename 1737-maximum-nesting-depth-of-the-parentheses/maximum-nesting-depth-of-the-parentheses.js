/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    const arr = s.split("");
    let ans = 0;
    let openBracket = 0;
    arr.forEach((curr) => {
        if(curr === '(') {
            openBracket++;
        }else if(curr === ')') {
            openBracket--;
        }
        ans = Math.max(ans, openBracket);
    })

    return ans;
};