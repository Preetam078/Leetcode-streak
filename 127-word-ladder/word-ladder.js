/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const set = new Set(wordList);
    if(!set.has(endWord)) return 0;

    let distance = 1;
    let queue = [beginWord];
    while(queue.length > 0) {
        let nextLevel = [];

        for(const currWord of queue) {
            if(currWord === endWord) return distance;

            for(let i = 0; i < currWord.length; i++) {
                for(let j = 0; j < 26; j++) {
                    const newChar = String.fromCharCode(97 + j);
                    const newWord = currWord.slice(0, i) + newChar + currWord.slice(i + 1);

                    if(set.has(newWord)) {
                        nextLevel.push(newWord);
                        set.delete(newWord);
                    }
                }
            }
        }
        queue = nextLevel;
        distance++;
    }
    return 0;
};