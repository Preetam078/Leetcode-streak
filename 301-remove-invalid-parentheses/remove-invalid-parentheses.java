class Solution {
    private int maxLen;
    private HashSet<String> ansSet;

    public List<String> removeInvalidParentheses(String s) {
        maxLen = -1;
        ansSet = new HashSet<String>();

        helper(s, new StringBuilder(), 0, 0, 0);
        return new ArrayList<String>(ansSet);
    }
    private void helper(String s, StringBuilder currStr, int idx, int leftCount, int rightCount) {

        if(idx == s.length()) {
            if(leftCount == rightCount) {
                int len = currStr.length();
                if(len > maxLen) {
                    maxLen = len;
                    ansSet.clear();
                    ansSet.add(currStr.toString());
                }
                else if(len == maxLen) {
                    ansSet.add(currStr.toString());
                }
            }
            return;
        }

        char currChar = s.charAt(idx);

        if(currChar == '(') {
            currStr.append(currChar);
            helper(s, currStr, idx+1, leftCount+1, rightCount);
            currStr.deleteCharAt(currStr.length() - 1);
            helper(s, currStr, idx+1, leftCount, rightCount);
        }
        else if(currChar == ')') {
            if(leftCount > rightCount) {
                currStr.append(currChar);
                helper(s, currStr, idx+1, leftCount, rightCount + 1);
                currStr.deleteCharAt(currStr.length() - 1);
            }
            helper(s, currStr, idx+1, leftCount, rightCount);
        }
        else {
            currStr.append(currChar);
            helper(s, currStr, idx+1, leftCount, rightCount);
            currStr.deleteCharAt(currStr.length() - 1);
        }
    }
}