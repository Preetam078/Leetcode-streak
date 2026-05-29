/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.arr = nums;
    this.segmentTree = Array(4 * nums.length).fill(0);
    if (nums.length > 0) {
        this.buildTree(0, 0, nums.length - 1);
    }
};

NumArray.prototype.buildTree = function(idx, low, high) {
    if (low === high) {
        this.segmentTree[idx] = this.arr[low];
        return;
    }
    const mid = Math.floor(low + (high - low) / 2);
    this.buildTree(2 * idx + 1, low, mid);
    this.buildTree(2 * idx + 2, mid + 1, high);

    this.segmentTree[idx] = this.segmentTree[2 * idx + 1] + this.segmentTree[2 * idx + 2];
};

NumArray.prototype.update = function(index, val) {
    const diff = val - this.arr[index];
    this.arr[index] = val;

    const updateChildren = (low, high, currIndex) => {
        if (index < low || index > high) return;
        
        this.segmentTree[currIndex] += diff;

        if (low < high) {
            const mid = Math.floor(low + (high - low) / 2);
            updateChildren(low, mid, 2 * currIndex + 1);
            updateChildren(mid + 1, high, 2 * currIndex + 2);
        }
    };

    updateChildren(0, this.arr.length - 1, 0);
};

NumArray.prototype.sumRange = function(left, right) {

    const query = (low, high, currIndex) => {
        if (right < low || left > high) return 0;
        if (low >= left && high <= right) return this.segmentTree[currIndex];

        const mid = Math.floor(low + (high - low) / 2);
        return query(low, mid, 2 * currIndex + 1) + query(mid + 1, high, 2 * currIndex + 2);
    };
    
    return query(0, this.arr.length - 1, 0);
};