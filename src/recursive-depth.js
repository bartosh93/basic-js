const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
   calculateDepth(arr) {
    /*if (arr.length ==0) {
      return 1 
    }    
      
    let subArr = []
    function subCulc(ar) {
      let deep=1;
      if (!Array.isArray(ar[0])) {
        deep = 2
        return deep
      } else if (Array.isArray(ar[0])) {
        return 1 + subCulc(ar[0])
      }
    }
    
     /* for (let i = 0; i < arr.length; i++) {
        subArr[i] = subCulc(arr[i])
      }*/
      
  /*if (subArr.length !=0) {
    return Math.max.apply(null, subArr)
  } else return 1*/
  
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







/*calculateDepth(arr) {
    let deep;
    let i = 0;
      if (!Array.isArray(arr[i])) {
        deep = 1
        return deep
      } else {
        return 1 + this.calculateDepth(arr[i])
      }
  }*/