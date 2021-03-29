const CustomError = require("../extensions/custom-error");
let arrr = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5];
module.exports = function transform( arr ) {
    let temparr = new Array;
    if(!Array.isArray(arr)) {
      throw new Error('Error')
    };
    for(let e = 0; e<arr.length; e++) {
      temparr[e] = arr[e]
    }
    for (let i = 0; i < temparr.length;i++ ){
      if (temparr[i] === '--double-next' ) {
        temparr[i] = temparr[i+1];    
    }  else if (temparr[i] === '--double-prev' ) {
      temparr[i] = temparr[i-1];  
    }  else if (temparr[i] === '--discard-next' ) {
      temparr[i] = ' '
      temparr[i+1] = ' '
    } else if (temparr[i] === '--discard-prev'  )  {
      temparr[i] = ' '
      temparr[i-1] = ' '
    } 
  }
  return temparr.filter(x => x!==' '&&x!==undefined)
};
