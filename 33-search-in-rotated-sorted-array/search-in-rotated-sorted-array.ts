function search(nums: number[], target: number): number {

    function findPivot(): number {
        let low: number = 0;
        let high: number = nums.length - 1;

        while(low < high) {
            const mid: number = Math.floor(low + (high - low)/2);
            if(nums[mid] > nums[high]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }

    function binarySearch(low: number, high: number): number {
        while(low <= high) {
            const mid: number = Math.floor(low + (high - low)/2);
            if(nums[mid] === target) {
                return mid;
            } else if(nums[mid] > target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return -1;
    }

    const pivot: number = findPivot();
    if(target >= nums[pivot] && target <= nums[nums.length - 1]) {
        return binarySearch(pivot, nums.length - 1);
    } else {
        return binarySearch(0, pivot - 1);
    }
};