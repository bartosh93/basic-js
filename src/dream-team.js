const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (Array.isArray(arr)) {

  
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == "string"  ) {
      arr[i] = arr[i].trim()
      newArr[i] = arr[i][0];
      
    } 
  }
  
  newArr = newArr.sort()
    /*newArr.push(' ')
    newArr.unshift(' ')*/
    newArr = newArr.join('')
    newArr = newArr.toUpperCase()
    newArr = newArr.split('').sort().join('')
    return  newArr
  } else {
    return false
  }
};
