class Solution {
    public String removeOuterParentheses(String s) {
        StringBuilder ans = new StringBuilder();
        StringBuilder currStr = new StringBuilder();
        Stack<Character> stack = new Stack<Character>();

        for(Character curr : s.toCharArray()) {
            if(curr == ')') {
                currStr.append(curr);
                if(!stack.isEmpty() && stack.peek() == '(') {
                    stack.pop();
                    if(stack.isEmpty()) {
                        String currAns = currStr.toString();
                        ans.append(currAns.substring(1, currAns.length()-1));
                        currStr.setLength(0);
                    }
                }
                else {
                   stack.push(curr); 
                }
                
            }
            else if(curr == '(') {
                currStr.append(curr);
                stack.push(curr); 
            }
        }
        return ans.toString();
    }
}