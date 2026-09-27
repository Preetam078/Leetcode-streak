/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const stack = [];

    for (const char of s) {
        if (char === ')') {
            const inner = [];
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                inner.push(stack.pop());
            }
            stack.pop();
            for (const c of inner) {
                stack.push(c);
            }
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};