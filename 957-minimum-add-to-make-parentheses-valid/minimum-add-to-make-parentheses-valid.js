/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    const stack = [];
    
    for (const char of s) {
        if (char === ')' && stack.length > 0 && stack[stack.length - 1] === '(') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.length;
};