const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
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
};




