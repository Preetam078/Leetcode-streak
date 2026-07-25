/**
 * @param {number} k
 * @param {number[]} nums
 */
var Heap = function(k) {
    this.heap = [null];
    this.maxLen = k;
}
Heap.prototype.insertItem = function(value) {
    this.heap.push(value);
    let idx = this.heap.length - 1;

    while(idx > 1) {
        let parent = Math.floor(idx / 2);
        if(this.heap[parent] > this.heap[idx]) {
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        } else break;
    }
    while(this.heap.length - 1 > this.maxLen) {
        this.removeItem();
    }
    return this.heap[1];
}
Heap.prototype.removeItem = function() {
    if(this.heap.length === 1) return null;
    if(this.heap.length === 2) return this.heap.pop();

    const value = this.heap[1];
    this.heap[1] = this.heap.pop();
    let idx = 1;
    while(true) {
        let currIdx = idx;
        let leftIdx = 2 * idx;
        let rightIdx = 2 * idx + 1;

        if(currIdx < leftIdx && this.heap[currIdx] > this.heap[leftIdx]) {
            currIdx = leftIdx;
        }
        if(currIdx < rightIdx && this.heap[currIdx] > this.heap[rightIdx]) {
            currIdx = rightIdx;
        }
        if(currIdx !== idx) {
            [this.heap[currIdx], this.heap[idx]] = [this.heap[idx], this.heap[currIdx]];
            idx = currIdx;
        } else break;
    }
    return value;
}

var KthLargest = function(k, nums) {
    this.minHeap = new Heap(k);
    for(const currEle of nums) {
        this.minHeap.insertItem(currEle);
    }
    return null;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    return this.minHeap.insertItem(val);
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */