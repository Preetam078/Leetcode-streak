/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var Heap = function() {
    this.heap = [null];
};

Heap.prototype.insertElement = function(value) {
    this.heap.push(value);
    let idx = this.heap.length - 1;
    while (idx > 1) {
        const parentIdx = Math.floor(idx / 2);
        if (this.heap[idx] < this.heap[parentIdx]) {
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
            idx = parentIdx;
        } else break;
    }
};

Heap.prototype.removeElement = function() {
    if (this.heap.length === 1) return null;
    if (this.heap.length === 2) return this.heap.pop();

    const value = this.heap[1];
    this.heap[1] = this.heap.pop();
    let idx = 1;

    while (true) {
        let smallestIdx = idx;
        const leftIdx = 2 * idx;
        const rightIdx = 2 * idx + 1;

        if (leftIdx < this.heap.length && this.heap[leftIdx] < this.heap[smallestIdx]) {
            smallestIdx = leftIdx;
        }
        if (rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[smallestIdx]) {
            smallestIdx = rightIdx;
        }

        if (smallestIdx !== idx) {
            [this.heap[smallestIdx], this.heap[idx]] = [this.heap[idx], this.heap[smallestIdx]];
            idx = smallestIdx;
        } else break;
    }
    return value;
};

Heap.prototype.getTop = function() {
    return this.heap[1] ?? null;
};

Heap.prototype.getLength = function() {
    return this.heap.length - 1;
};

var findKthLargest = function(nums, k) {
    const minHeap = new Heap();

    for (const currEle of nums) {
        minHeap.insertElement(currEle);
        if (minHeap.getLength() > k) {
            minHeap.removeElement();
        }
    }

    return minHeap.getTop();
};