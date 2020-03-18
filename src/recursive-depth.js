module.exports = class DepthCalculator {
    calculateDepth(arr, count = 1) {
        if (Array.isArray(arr) === false) {
            throw new Error('this is not array');
        } 
            for(let i = 0; i<arr.length; i++) {
                if (Array.isArray(arr[i])) {
                    arr = arr.flat();
                    count = this.calculateDepth(arr, ++count);
                    break;
                }
            }
            return count;
    }
};