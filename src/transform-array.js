const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let temparr = new Array;
    if(!Array.isArray(arr)) {
      throw new Error('\'arr\' parameter must be an instance of the Array!')
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
}

module.exports = {
  transform
};
