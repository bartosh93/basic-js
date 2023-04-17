const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
    let max = 0;
    if ( Array.isArray(arr) )  {
        if (max==0) {
          max +=1  
        } 
        let temp = 0;   
        arr.forEach(el => {
          if (Array.isArray(el)){
          let  tempMax = this.calculateDepth(el)
            if (tempMax>temp){
              temp = tempMax
            }
          }      
        });
        max = max + temp
    }
    return max
}
}

module.exports = {
  DepthCalculator
};
