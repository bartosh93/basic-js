const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let deep;
    let i = 0;
      if (!Array.isArray(arr[i])) {
        deep = 1
        return deep
      } else {
        return 1 + this.calculateDepth(arr[i])
      }
  }
};