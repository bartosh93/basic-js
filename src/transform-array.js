const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
    arrNew = arr.slice()
  
    for (let i = 0; i < arrNew.length; ){
        
        if (arrNew[i] === '--double-next' && arrNew[i+1] !== undefined) {
          arrNew[i] = arrNew[i+1] 
      } else if (arrNew[i] === '--double-next') {
        arrNew.splice(i, 1) 
      } else if (arrNew[i] === '--double-prev' && arrNew[i-1] !== undefined) {
        arrNew[i] = arrNew[i-1]
      } else if (arrNew[i] === '--double-prev') {
        arrNew.splice(i, 1)
      } else if (arrNew[i] === '--discard-next') {
        arrNew.splice(i, 1)
      } else if (arrNew[i] === '--discard-prev' && arrNew[i-1] !== undefined)  {
        arrNew.splice(i-1, 2)
      } else if (arrNew[i] === '--discard-prev')  {
        arrNew.splice(i, 1)
      }
      i++
    }
    return arrNew
};
