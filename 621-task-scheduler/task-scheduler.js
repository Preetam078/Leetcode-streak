/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var Heap = function() {
    this.heap = [null];
}
Heap.prototype.insertItem = function (value) {
    this.heap.push(value);
    let idx = this.heap.length - 1;

    while(idx > 1) {
        let parent = Math.floor(idx / 2);
        if(this.heap[parent] < this.heap[idx]) {
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }else break;
    }
}
Heap.prototype.removeItem = function() {
    if(this.heap.length === 1) return null;
    if(this.heap.length === 2) return this.heap.pop();

    const value = this.heap[1];
    this.heap[1] = this.heap.pop();
    let idx = 1;
    while(true) {
        let largeIdx = idx;
        let leftIdx = 2 * idx;
        let rightIdx = 2 * idx + 1;

        if(largeIdx < leftIdx && this.heap[largeIdx] < this.heap[leftIdx]) {
            largeIdx = leftIdx;
        }
        if(largeIdx < rightIdx && this.heap[largeIdx] < this.heap[rightIdx]) {
            largeIdx = rightIdx;
        }

        if(largeIdx !== idx) {
            [this.heap[largeIdx], this.heap[idx]] = [this.heap[idx], this.heap[largeIdx]];
            idx = largeIdx
        } else break;
    }
    return value;
}
Heap.prototype.getLength = function() {
    return this.heap.length - 1;
}
var leastInterval = function(tasks, n) {
    const taskMap = new Map();
    const maxHeap = new Heap();
    for(const currEle of tasks) {
        taskMap.set(currEle, (taskMap.get(currEle) ?? 0) + 1);
    }
    for(const freq of taskMap.values()) {
        maxHeap.insertItem(freq);
    }

    let time = 0;
    const queue = [];
    while(maxHeap.getLength() > 0 || queue.length > 0) {
        time++;
        if(maxHeap.getLength() > 0) {
            const remFreq = maxHeap.removeItem() - 1;
            if(remFreq > 0) {
                queue.push([remFreq, time + n]);
            }
        }

        if(queue.length > 0 && queue[0][1] === time) {
            const [freq, currTime] = queue.shift();
            maxHeap.insertItem(freq); 
        }
    }
    return time;
};